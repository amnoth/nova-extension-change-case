import * as changeCase from "change-case"

export function activate() {}

export function deactivate() {}

// camelCase: Transform into a string with the separator denoted by the next word capitalized.
nova.commands.register("change-case.toCamelCase", (editor) => {
  convert(editor, "camelCase")
})

// capitalCase: Transform into a space separated string with each word capitalized.
nova.commands.register("change-case.toCapitalCase", (editor) => {
  convert(editor, "capitalCase")
})

// constantCase: Transform into upper case string with an underscore between words.
nova.commands.register("change-case.toConstantCase", (editor) => {
  convert(editor, "constantCase")
})

// dotCase: Transform into a lower case string with a period between words.
nova.commands.register("change-case.toDotCase", (editor) => {
  convert(editor, "dotCase")
})

// headerCase: Transform into a dash separated string of capitalized words.
nova.commands.register("change-case.toHeaderCase", (editor) => {
  convert(editor, "headerCase")
})

// noCase: Transform into a lower cased string with spaces between words.
nova.commands.register("change-case.toNoCase", (editor) => {
  convert(editor, "noCase")
})

// paramCase: Transform into a lower cased string with dashes between words.
nova.commands.register("change-case.toParamCase", (editor) => {
  convert(editor, "paramCase")
})

// pascalCase: Transform into a string of capitalized words without separators.
nova.commands.register("change-case.toPascalCase", (editor) => {
  convert(editor, "pascalCase")
})

// pathCase: Transform into a lower case string with slashes between words.
nova.commands.register("change-case.toPathCase", (editor) => {
  convert(editor, "pathCase")
})

// sentenceCase: Transform into a lower case with spaces between words, then capitalize the string.
nova.commands.register("change-case.toSentenceCase", (editor) => {
  convert(editor, "sentenceCase")
})

// snakeCase: Transform into a lower case string with underscores between words.
nova.commands.register("change-case.toSnakeCase", (editor) => {
  convert(editor, "snakeCase")
})

function convert(
  editor: TextEditor,
  toCase:
    | "camelCase"
    | "capitalCase"
    | "constantCase"
    | "dotCase"
    | "headerCase"
    | "noCase"
    | "paramCase"
    | "pascalCase"
    | "pathCase"
    | "sentenceCase"
    | "snakeCase"
) {
  const nextRanges: Range[] = []
  let offset = 0
  editor.edit((edit) => {
    for (let selection of editor.selectedRanges.slice()) {
      const text = editor.getTextInRange(selection)
      var newText = text

      newText = changeCase[toCase](text)

      selection = new Range(
        selection.start + offset,
        selection.start + offset + text.length
      )

      edit.delete(selection)
      edit.insert(selection.start, newText)

      var start = selection.start

      if (nova.config.get("change-case.use-shadow-typing", "boolean")) {
        start += newText.length
      }

      selection = new Range(start, selection.start + newText.length)

      nextRanges.push(selection)
      offset += newText.length - text.length
    }
  })
  if (nova.config.get("change-case.use-shadow-typing", "boolean")) {
    editor.startShadowTyping(nextRanges)
  } else {
    editor.selectedRanges = nextRanges
  }
}
