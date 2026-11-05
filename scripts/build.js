const fs = require("fs");
const yaml = require("js-yaml");

const syntax = yaml.load(
  fs.readFileSync("syntaxes/req.tmLanguage.yaml", "utf8")
);
const grammar = updateGrammarVariables(syntax, getVariables(syntax));
const text = JSON.stringify(grammar);
fs.writeFileSync("syntaxes/req.tmLanguage.json", text);

function getVariables(syntax) {
  const variables = syntax.variables;
  for (const variableName in syntax.variables) {
    variables[variableName] = syntax.variables[variableName];
  }
  return variables;
}

function updateGrammarVariables(grammar, variables) {
  delete grammar.variables;
  const variableReplacers = [];
  for (const variableName in variables) {
    const pattern = replacePatternVariables(
      variables[variableName],
      variableReplacers
    );
    const elem = [new RegExp(`{{${variableName}}}`, "gim"), pattern];
    variableReplacers.push(elem);
  }
  transformGrammarRepository(grammar, ["begin", "end", "match"], (pattern) =>
    replacePatternVariables(pattern, variableReplacers)
  );
  return grammar;
}

function transformGrammarRepository(grammar, propertyNames, transformProperty) {
  const repository = grammar.repository;
  for (const key in repository) {
    transformGrammarRule(repository[key], propertyNames, transformProperty);
  }
}

function replacePatternVariables(pattern, variableReplacers) {
  let result = pattern;
  for (const [variableName, value] of variableReplacers) {
    result = result.replace(variableName, value);
  }
  return result;
}

function transformGrammarRule(rule, propertyNames, transformProperty) {
  for (const propertyName of propertyNames) {
    const value = rule[propertyName];
    if (typeof value === "string") {
      rule[propertyName] = transformProperty(value);
    }
  }

  for (const propertyName in rule) {
    const value = rule[propertyName];
    if (typeof value === "object") {
      transformGrammarRule(value, propertyNames, transformProperty);
    }
  }
}
