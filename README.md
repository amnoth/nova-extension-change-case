# Change Case nova Extension

A wrapper of [change-case](https://github.com/blakeembrey/change-case) for Panic's [nova](https://nova.app) code editor.

## Build

```bash
npm install
npm run build
```

## Install

```bash
open change-case.novaextension
```

## Usage

`cmd-shift-p` or **Editor -> Change Case**

### Supports the core utilities of change-case

- [Camel Case](#camel-case)
- [Capital Case](#capital-case)
- [Constant Case](#constant-case)
- [Dot Case](#dot-case)
- [Header Case](#header-case)
- [No Case](#no-case)
- [Param Case](#param-case)
- [Pascal Case](#pascal-case)
- [Path Case](#path-case)
- [Sentence Case](#sentence-case)
- [Snake Case](#snake-case)

#### Camel Case

> Transform into a string with the separator denoted by the next word capitalized.

```js
"test string" => "testString"
```

#### Capital Case

> Transform into a space separated string with each word capitalized.

```js
"test string" => "Test String"
```

#### Constant Case

> Transform into upper case string with an underscore between words.

```js
"test string" => "TEST_STRING"
```

#### Dot Case

> Transform into a lower case string with a period between words.

```js
"test string" => "test.string"
```

#### Header Case

> Transform into a dash separated string of capitalized words.

```js
"test string" => "Test-String"
```

#### No Case

> Transform into a lower cased string with spaces between words.

```js
"test string" => "test string"
```

#### Param Case

> Transform into a lower cased string with dashes between words.

```js
"test string" => "test-string"
```

#### Pascal Case

> Transform into a string of capitalized words without separators.

```js
"test string" => "TestString"
```

#### Path Case

> Transform into a lower case string with slashes between words.

```js
"test string" => "test/string"
```

#### Sentence Case

> Transform into a lower case with spaces between words, then capitalize the string.

```js
"testString" => "Test string"
```

#### Snake Case

> Transform into a lower case string with underscores between words.

```js
"test string" => "test_string"
```

## License

MIT
