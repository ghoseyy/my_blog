---
layout: post
title: Google dork cheatsheet
tags: [google, tutorial, search , technique]
---

# Google Dork Cheat Sheet
A "Google dork" is a search string used to find specific information on the internet using Google's search engine. It involves using advanced search operators to refine results and can be used for various purposes, including security testing. However, it's important to use these techniques responsibly and legally.

### Search Filters

| Filter            | Description                                                     | Example                                       |
|-------------------|-----------------------------------------------------------------|-----------------------------------------------|
| `allintext`       | Searches for occurrences of all the keywords given.             | `allintext:"keyword"`                         |
| `intext`          | Searches for the occurrences of keywords all at once or one at a time. | `intext:"keyword"`                        |
| `inurl`           | Searches for a URL matching one of the keywords.                | `inurl:"keyword"`                             |
| `allinurl`        | Searches for a URL matching all the keywords in the query.      | `allinurl:"keyword"`                          |
| `intitle`         | Searches for occurrences of keywords in title all or one.       | `intitle:"keyword"`                           |
| `allintitle`      | Searches for occurrences of keywords all at a time.             | `allintitle:"keyword"`                        |
| `site`            | Specifically searches that particular site and lists all the results for that site. | `site:"www.google.com"`                   |
| `filetype`        | Searches for a particular filetype mentioned in the query.      | `filetype:"pdf"`                              |
| `link`            | Searches for external links to pages.                            | `link:"keyword"`                              |
| `numrange`        | Used to locate specific numbers in your searches.               | `numrange:321-325`                            |
| `before/after`    | Used to search within a particular date range.                  | `filetype:pdf & (before:2000-01-01 after:2001-01-01)` |
| `allinanchor`     | Shows sites which have the key terms in links pointing to them, in order of the most links. | `allinanchor:rat`                     |
| `allinpostauthor` | Exclusive to blog search, this one picks out blog posts that are written by specific individuals. | `allinpostauthor:"keyword"`           |
| `related`         | List web pages that are “similar” to a specified web page.      | `related:www.google.com`                      |
| `cache`           | Shows the version of the web page that Google has in its cache. | `cache:www.google.com`                       |

### Examples

- `intext:"index of /"`
- `Nina Simone intitle:"index.of" "parent directory" "size" "last modified" "description" I Put A Spell On You (mp4|mp3|avi|flac|aac|ape|ogg) -inurl:(jsp|php|html|aspx|htm|cf|shtml|lyrics-realm|mp3-collection) -site:.info`
- `Bill Gates intitle:"index.of" "parent directory" "size" "last modified" "description" Microsoft (pdf|txt|epub|doc|docx) -inurl:(jsp|php|html|aspx|htm|cf|shtml|ebooks|ebook) -site:.info`
- `parent directory DVDRip -xxx -html -htm -php -shtml -opendivx -md5 -md5sums`
- `filetype:config inurl:web.config inurl:ftp`
- `"Windows XP Professional" 94FBR`
- `ext:(doc | pdf | xls | txt | ps | rtf | odt | sxw | psw | ppt | pps | xml) (intext:confidential salary | intext:"budget approved") inurl:confidential`

### Operators

- **Search Term**
  - This operator searches for the exact phrase within speech marks only.

- **OR**
  - This operator searches for a given search term OR an equivalent term.
    - `site:facebook.com | site:twitter.com`

- **AND**
  - This operator combines search terms.
    - `site:facebook.com & site:twitter.com`

- **Operators Combination**
  - Combining operators for more refined searches.
    - `(site:facebook.com | site:twitter.com) & intext:"login"`

### Include and Exclude Results

- **Include Results**
  - Orders results by the number of occurrences of the keyword.
    - `-site:facebook.com +site:facebook.*`

- **Exclude Results**
  - Excludes specific sites from the results.
    - `site:facebook.* -site:facebook.com`

### Synonyms

- Adding a tilde (~) to a search word tells Google to bring back synonyms for the term.
  - `~set`

### Glob Pattern (*) 

- Putting an asterisk in a search tells Google 'I don’t know what goes here'.
  - `site:*.com`