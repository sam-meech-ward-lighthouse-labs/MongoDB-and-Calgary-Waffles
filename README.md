# Data Persistence, Async, and MongoDB

## Data persistence

* What is data persistence?
  - Data that's stored somewhere longer than the thing that created it.  
* Why do we need data persistence?


```js
var tweets = [
  { 
    user: {
    username: "🤗"
    },
    content: {
      text: "Why was the JavaScript afraid of the HTML?"
    }
  }
];
tweets.push(newTweet);
```

* it's in volatile memory, meaning that when the server restarts, the data goes away.
* Web servers aren't reliable. What if there's a power outage?
* We have to restart the server when we add new code. 

* How can we persist data?
  - Just in memory
  - Save it to a hard drive 
  - use `fs` to save to a text file. `.json` JavaScript Object Notation file.
    
* JSON files
  - As data grows, we would need a good plan for organization and querying. But we could write a library to do that.
  - multiple queries at the same time. You would need a plan for concurrency. 


> "Print out a hard copy and automate a scanner to read it back in on-demand." - Adam [9:16 AM]

## MongoDB

* We want backups.
* We want a way to query large (like really large) amounts of data.
* We need a plan for concurrency.
* We want transactions. 
* We want scalability.

* PostgreSQL, Oracle, Microsoft Access, CouchDB, MySQL, Redis.

* Maybe mongoDB exists because devs don't want to learn SQL.
* If you use Mongo, and you already know JavaScript, you don't have to learn a new language. 

* Terminology:
  - database: a group of collections. Is usually application specific.
    - `tweeter` 
  - collections: A group of documents (a group of objects). kind of like the tables. 
    - `tweets`
  - document: a BSON Binary JSON (Basically JSON) objects.
    - `tweet` 

## Async / Non Blocking Code

* The rest of the app can run while a long running task happens.

**blocking:**

```js
var sandwich = makeMeSandwich(); // at least 10 minutes
// Sandwich making done

// The rest of our code has to wait until this is done, before continuing.
```

**non block:**

```js
var returnValue = makeMeSandwich((err, sandwich) => {
  // Sandwich making done
}); // at least 10 minutes

// The rest of our code can continue to execute.
```

---

## Links

* https://github.com/lighthouse-labs/tweeter/blob/master/server/data-files/initial-tweets.json
* https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

## Snippets

### Shell

1. `use <dbname>`
2. `db.<collection_name>.do_something`
    `db.users.insert({username: "sam"})`
3. `db.users.find()`, `db.users.count()`

#### `find`

  * `db.<collection>.find()` find all
  * `db.<collection>.find({username: "jones"})` find with a query parameter
  * `db.<collection>.find({username: "jones", age: 12})`  AND
  * `$or` `$and` `db.<collection>.find({$or:  [{username: "sam"}, {username: "jones"}]})`
  * `db.users.find({"favorites.movies": "Casablanca"})` sub document
  * `db.numbers.find( {num: {"$gt": 20, "$lt": 25 }} )`

#### Update and Replace

* `db.collection.update({username: "🤗"}, {$set: {username: "💩"}})` update the first item that matches the initial criteria.
* `db.collection.update({username: "🤗"}, {username: "💩"})` replace the first item that matches the initial criteria.


#### Remove

* `db.collection.remove()` remove everything or `db.users.drop()`
* `db.users.remove({"favorites.cities": "Cheyenne"})`