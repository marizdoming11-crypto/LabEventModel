Paradigm Comparison – User Submits a Search Form
Procedural Programming

In procedural programming, the program follows a sequence of instructions from beginning to end.
The main code controls the order of operations and is responsible for calling the search functions.
The program may read the user's input, validate it, send the request, and process the result step by step.
The flow is mainlvy controlled by the procedure or main program rather than by independent events.
Asynchronous results may require callbacks, promises, or other mechanisms to continue the procedure after the result arrives.

Object-Oriented Programming (OOP)

In OOP, the search functionality can be organized into classes and objects.
A form object, search service, or result object can have its own properties and methods.
Handlers or methods can be placed inside appropriate classes to manage user actions and application behavior.
The objects communicate with each other when the user submits the form.
Async search results can be returned through promises, callbacks, or async/await and then handled by the appropriate object.

Event-Driven Programming

In event-driven programming, the application waits for events such as a form submission.
The event handler owns the response to the user's action rather than one central loop constantly checking for input.
The search form can have a submit event listener that runs when the user submits the form.
The handler can start an asynchronous request and respond when its result becomes available.
Promises, callbacks, or async/await can be used to process the asynchronous search result.