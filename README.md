## Introduction

Reproduction for https://github.com/prisma/prisma/issues/4335

## Version used

```

```

Please note that this is only reproducible in mysql


## Steps

1. Clone the repo and install the deps
2. Run `yarn start` and you will notice `catch` block is not called even though database credentials doesn't reach a server
