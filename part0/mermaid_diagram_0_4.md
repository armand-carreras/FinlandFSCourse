```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user --> browser: Type note click submit
    activate browser
    browser --> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server --> browser: HTML Document
    server --> browser: css
    server --> browser: js
    server --> browser: json
    deactivate server

```
