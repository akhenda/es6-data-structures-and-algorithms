## Hash Table

According to Wikipedia:

> In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
>
> Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.
>
> In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized) constant average cost per operation.

A Hash Table is a dictionary-like data structure which pairs *keys* to *values*. The *address* in memory where the `key-value` pair should be inserted and accessed is determined by a `hash function`, which returns the *address* when the *key* is passed to it. Collisions occur when the hash function converts two or more keys to the same address. To ensure that all data can be retrieved and no data is overwritten, `getters` and `setters` should be robust and made to anticipate these events. `Linked lists` are usually used to offer the simplest solution but also having very large tables/maps helps. A simple `object literal` can suffice in a scenario where keys directly represent addresses, and therefore no hashing is needed. In practice, however, we can assume that hash functions are clever enough that collisions and resizing are rare and cheap.

If a tradeoff decision favors retrieval over storage, no other data structure can match the speed of hash tables for *search*, *insertion*, and *deletion*. For this reason, hash tables are used almost *everywhere*. From the server, to the client, to the database, *hash tables*, more specifically, *hash functions*, are crucial to the security and performance of software applications. The speed of **database queries** relies heavily upon keeping tables of *indexes* that point to records in *sorted* order. This way, *binary searches* can be performed in *logarithmic* time, a huge performance win especially for **Big Data**.

Hash functions such as MD5 and SHA256 play a critical role in preventing such *man-in-the-middle* attacks. E-commerce over HTTPS is safe only because these hashing functions are used.

Inspired by the Internet, **blockchain** technologies seek to *open source* the very structure of the web. By using hash functions to create *immutable fingerprints* for every *block of data*, essentially the entire database can exist *openly* on the web for anyone to see and contribute to.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Access    | ---        |
| Search    | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |
| Insert    | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |
| Space     | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |
| Delete    | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |

Simple representation of a Hash Table

A small phone book as a hash table

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Hash collision resolved by separate chaining.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

Hash collision by separate chaining with head records in the bucket array.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hash_table_5_0_1_1_1_1_0_LL.svg/1000px-Hash_table_5_0_1_1_1_1_0_LL.svg.png)

Hash collision resolved by open addressing with linear probing (interval=1). Note that "Ted Baker" has a unique hash, but nevertheless collided with "Sandra Dee", that had previously collided with "John Smith".

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/760px-Hash_table_5_0_1_1_1_1_0_SP.svg.png)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
-   [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
