## Features
- Built in authentication and authorization
- The possibility to delete todos
- "Deleted" todos by user are marked as "Temporarily deleted" ar first

## Overview
This project was created by me to experiment with the beta **app** directory in the new NextJS version 13.

## How to use
- Install the application by running the following command right after you cloned it onto your file system:

```bash
npm install
```

- Add a **.env** file in the root directory and add the following environment variables:

```bash
DATABASE_URL="<Your database connection string>"
NEXTAUTH_SECRET="<You nextauth secret>"
```

The nextauth secret variable is used to identify and decode authorization requests.

- Migrate a new database prisma instance by typing the following command:

```bash
npx prisma migrate dev
```

You will be prompted to use a name for your migration. You can use any name you like.

#### Feel free to use all the code. If you have any questions or have a suggestion, I am all ears.