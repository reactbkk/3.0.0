# redeem

Ticket redemption system.

## To add a ticket to the specified user

### From the UI

If you are an admin, you
[will see an additional option when you sign in](https://github.com/reactbkk/3.0.0/pull/12).

### Manually from Firestore console

1.  Find the user’s GitHub ID.

        https://api.github.com/users/<username>

    For example

        https://api.github.com/users/dtinth

    The ID is 193136.

2.  Go to
    [Cloud Firestore console](https://console.firebase.google.com/u/0/project/reactbkk3/database/firestore/data~2Fgithub_users).

3.  Click **Add Document**.

4.  Fill in the information:

    * Document id: `<user id>` (example: 193136)
      * `code` = (string) `<redemption code>` (example: ABCDEFGH)
      * `username` = (string) `<username>` (example: dtinth)

5.  Click **Save**. Now the user can redeem the ticket.
