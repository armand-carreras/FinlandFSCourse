´´´mermaid
diagramSequence
    participant Browser
    participant Server

    browser --> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server --> browser: JSON
    deactivate server
´´´
