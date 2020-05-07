# ts-repro-project-narrowing

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
