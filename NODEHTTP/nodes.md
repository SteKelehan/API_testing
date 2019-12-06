
    // this is just insuing the type of data returned it will render text plain so if you put html tag in there it would not reder html  => res.setHeader('Content-Type', 'text/plain');


    Http status codes:

    1.xx -> these are info
    2xx success
    200 sucess
    201 success and somthing was created
    204 success with no content

    3xx Reditection
    304 NOt modified

    4xx Client Error
    400 Bad Requests
    401 Unauthorized
    404 Not found

    5xx Server Error
    500 Internal Server Error


Request Methods

    GET
        - normaly GET/todos

    POST
        - normaly POST/todo/1
  
    PUT/PATCH
        - normaly POST/todo/1

    DELETE
        - normaly POST/todo/1



