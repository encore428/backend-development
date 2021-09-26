**Homework - 17 Aug**

Extend the CRUD app with the following:
<ol>
<li>Add an API for retrieving all items that belong to a particular user id.</li>
<li>Modify the PUT /items API to restrict updating of the item by its user only.</li>
    <ol>
	<li>For example: item id 2 belongs to user id 3</li>
    <li>PUT /items/2 can only be called successfully by user id 3</li>
    <li>All other users should be forbidden from accessing the API</li>
	</ol>
</ol>
You may choose to store the objects in memory without persisting to a database. The focus of
the homework is on the API design, implementation and error handling.
