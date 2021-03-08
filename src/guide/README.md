# Introduction

Inspired by [SeAT](https://github.com/eveseat/seat), seatplus is a
complete rewrite based on the most frequent user- and feature request.
Currently, seat-plus is under development and required your feedback.
What do you like? What feature would you like to see? Any feedback is of
value.

| Channel                                        | Purpose                       |
|:-----------------------------------------------|:------------------------------|
| [GitHub](https://github.com/seatplus/seatplus) | Bug-Reports, Feature Requests |
| [Discord](https://discord.gg/3UR5uDDMjK)       | Social, Support               |

Have Friends on your instance, only request esi-scopes when necessary.
Have an overview of members compliancy if scopes or refresh_tokens has
been changed. No delays between role assignment and users capabilities.
Allow recruiters to only review recruits without access to in-corp
characters. Automatically assign roles to users based upon their
corporation or alliance.

## Features

- [Scoped Access](../feature/README.md#login-scopes) - support multiple esi-scopes
  settings, use minimal scopes until enlistment
- Support of Recruiter Role - new user-friendly role based access
  control system
- allow recruiters to access all data from characters in alliance except
  one
- [Work with unknown location](../feature/README.md#unknown-locations) - suggest locations which can not be
  resolved to filter f.e. assets
- Support manual, automatic, opt-in and on-request Roles
  - Permissions and roles do not require an asynchronous task to
    complete. Every permission is applied immediately.
- Full ESI-Dependency - no more SDE Issues
- [Recruiter specific watchlist and views](../feature/README.md#applications) - only show assets in a
  specific region or system
- [Consume in-game alliance and corporation standings](../feature/README.md#character-contacts) to highlight
  character contact standings that differ.

### ESI Categories covered

- Character
  - [Assets](../feature/README.md#applications)
  - [Contacts](../feature/README.md#character-contacts)
  - [Contracts](../feature/README.md#character-contracts)
  - [Wallet Journals](../feature/README.md#character-wallets)
  - [Wallet Transactions](../feature/README.md#character-wallets)

- Corporation
  - [Member Tracking](../feature/README.md#corporation-member-tracking)

::: details Corporation endpoints for assets, contacts and contracts are
90% done, yet front-end is missing. Wallet journal and wallet
transactions are nearly 80% done missing the FE as well. :::


## Broadcast for help

seatplus has and will be a hobby project of
[Herpaderp Aldent](https://evewho.com/character/95725047), thus help in
developing, testing, writing documentation etc is highly appreciated.

It would be helpful if you'd be interested in one the following:
- Vue.js
- Laravel (Vue - Inertia - Tailwind - Laravel Stack)
- Tailwind CSS

### Good Profiles:

1. You are know your way around php
2. You got no interest towards php, but you are keen towards vue.js
3. You are able to write JS-Tests (those are lacking atm)
4. You got no experience in neither php nor vue.js but are willing to
   learn
5. You got nothing of that sort, but you would like to submit
   feature-requests or bug-reports

