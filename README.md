Setup:
```
npm i
```

How to run it:
```
BROWSERSTACK_USERNAME='user_name' BROWSERSTACK_ACCESS_KEY='key' npm run wdio 
```

Note: The issue is not always reproduced.
Currently running the test 5 times generally reproduce the issue (500 error from Nginx for `execute`)
