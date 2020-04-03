# DBnb
This is a project revolved around system design for a booking system. Both PostgreSQL and Apache Cassandra are benchmarked against one another (with the ultimate optimizations being for a Cassandra cluster).

# Cassandra 
For the Apache Cassandra design, I chose to implement a single rack, 9 node cluster in my local datacenter (us-west-1) onto AWS.
## Optimizations Included:
Add row caching to significantly increase read heavy operations
Add a data tiered compaction strategy
Add Compression
Horizontally scaling with an Nginx load balancer
Vertically scaling by adding new nodes to cluster gradually
## Optimization Times
WRITE: increased from an intial throughput of < 60 rps to throughput of > 1200 rps with an error rate < 1.5%
READ: increased from an initial throughput of < 75 rps to throughput of > 1500 rps error rate < 1%

## Cassandra and PostgreSQL schemas available in /db


