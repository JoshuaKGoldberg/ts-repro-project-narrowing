# ts-repro-project-narrowing

https://github.com/microsoft/TypeScript/issues/38406

```shell
npm i
npm run tsc
```

```
> tsc

src/a/Wat.tsx:3:9 - error TS2322: Type 'string | Error' is not assignable to type 'Error'.
  Type 'string' is not assignable to type 'Error'.

3     let printed: Error | undefined = value;
          ~~~~~~~


Found 1 error.
```

😕.
