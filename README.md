# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The client computer asks the MarkSheet server (on which techtonic group is hosted)
to get the file called techtonicgroup.html. The server checks if the
page is there while the client computer waits. Once the server finds the webpage,
it sends it to the client. The file sent to the client is not saved but is only
temporarily displayed while it's navigated to. If we were to go to techtonicgroup.com
again, we would go through the same process of asking the server for it. This ensures
that we receive the latest version of the file (webpage).

## From start to finish how does that data reach you to be rendered in the browser?

The browser goes to the DNS server and finds the real address (IP address of the
server that the website lives on). After the address is found, the browser sends an HTTP
request message to the server which is asking it to send a copy of the website to
the client. This (and all data sent between the client and server is sent across
your internet connection via TCP/IP). If the server approves the client request
then it sends a "200 OK" message meaning the client is able to look at the website.
It then sends data packets (small chuncks of data) to the client. The browser
assembles those small chunks of data into a complete website and displays it to you.

## What code is rendered in the browser?
HTML/CSS/JavaScript

## What is the server-side code’s main function?
It mostly involves choosing which content is returned to the browser in response to requests. The server-side code handles tasks like validating submitted data and requests, using databases to store and retrieve data and sending the correct data to the client as required.

## What is the client-side code’s main function?
 Its main concern is improving the appearance and behavior of a rendered web page.
 This includes selecting and styling UI components, creating layouts, navigation,
 form validation, etc.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
only one instance is created per asset

## How many instances of the server-side code are available at any given time?
An instance can be referenced multiple times

## What is runtime?
Runtime or execution time is the time during which a program is running (executing), in contrast to other program lifecycle phases such as compile time, link time and load time.


## How many instances of the the databases connected to the server application are created?
I am unsure of each of the questions regarding instances. I read mozilla developer,
looked on stack exchange as well as other sites blogs and sites. I checked the site with
chrome dev tools and still do not know how to locate the correct answers for
these set of questions.
