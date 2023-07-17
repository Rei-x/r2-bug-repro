# R2 bug reproduction in local mode on node@20

1. Clone the repo

```bash
git clone git@github.com:Rei-x/r2-bug-repro.git && cd r2-bug-repro
```

2. Use node@20
3. Install dependencies

```bash
npm install
```

4. Run app

```bash
npm start
```

5. Open <http://localhost:8787>
6. Nothing happens :(
7. Try to switch to node@18 and repeat the steps - everything works correctly
