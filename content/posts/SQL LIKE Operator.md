---
title: "SQL LIKE Operator"
date: "2020-07-11T12:40:32.169Z"
template: "post"
draft: false
slug: "/posts/sql-like-operator/"
category: "SQL"
tags:
  - "SQL"
  - "SQL LIKE"
  - "SQL Wildcards"
  - "Wecode"
  - "위코드"
description: "How SQL LIKE Operator works & get to know about wildcards"
---

#### This post will be written in English so that I could grind my technical writing. Please send me feedback via my email if anything wrong :)

## SQL Like Operator

Most of times, you need to search or filter data in SQL DB to get raw data with `WHERE` operator as data pre-processing. I'm sure it's much easier implementing `Regex` in your webserver, but it might be better filtering it out in SQL statement. <br/>
In this case, `LIKE` operator helps you a lot! Let's see how it works. <br/>

#### `WHERE LIKE ...(your statement with wildcards)`

First off, there are reserved words, called `wildcards`. the syntax vary from your SQL license, so you need to check your SQL version. Basic rules are as follows:

| Symbol | Description                                         | Example                                  |
| ------ | --------------------------------------------------- | ---------------------------------------- |
| `%`    | Represents zero or more characters                  | `bl%` finds bl, black, blue, and blob    |
| `\_`   | Represents a single character                       | `h_t` finds hot, hat, and hit            |
| `[]`   | Represents any single character within the brackets | `h[oa]t` finds hot and hat, but not hit  |
| `^`    | Represents any character not in the brackets        | `h[^oa]t` finds hit, but not hot and hat |
| `-`    | Represents a range of characters                    | `c[a-b]t` finds cat and cbt              |

<br/>

As you can see, most of case, that's enough to combine `%` and `[]` combinations when you extract row including your `string`. To myself, I've used this a lot when I need to process log data to see which url users acceess to.

```SQL
SELECT
  *
FROM
  account.user_log
WHERE
LIKE request_path 'https://www.w3schools.com/%'
-- it returns rows including 'https://www.w3schools.com/'
```

Likewise, it helps you get pre-processed rows so that you can process further in your webserver!

\*Reference:<br/>
[W3S Schools - SQL LIKE Operator](https://www.w3schools.com/sql/sql_like.asp)<br/>
[W3S Schools - SQL Wildcard Characters](https://www.w3schools.com/sql/sql_wildcards.asp)
