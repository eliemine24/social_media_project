# The App

please note that this readme is temporary.

We want to make an app that fetches AI-content on social media (instagram for AI referencing), and show it to you on a nice looking interface. From this interface/page and by seeing the content, you can classify it in pre-existent categories by clicking on buttons and then confirming your selection (this allows you to put the content in more than 1 category). Once you click on, say, "validate", the back-end update a database referencing what post goes in what categories, and immediatly skips to the next post to classify. 

## Front

- designed for laptop
- one page app / web-app
- one display screen to watch content
- one "confirm" button to confirm classification and skip to the next post
- several buttons below/above/anywhere around the display screen to make a category selection. buttons should be : 
	1. humor (includes pure brainrot as other forms of humor like memes, stand-up, etc)
	2. fiction (storitelling, fantasy, horror, crime, sci-fi, etc)
	3. music
	4. visual art
	5. (poetry)
	6. porn (as depicted previously, I think anyone confronted to social media sees what I mean)
	7. journalism
	8. sciences & techs
	9. far-left (anarchism, communism, radical ecology, strong anti-capitalism etc)
	10. left (socialism, soc-dem, ecology, feminism, ?)
	11. right (liberarianism, securitarism, )
	12. far-right (nationalism, authoritarianism, masculinism, fascism and other sympathetic neo-nazis)

## Back

Script fetching content referenced as AI content to show to the user.

Script updtating the DB with classified content information.

DB referencing the content that has been whatched and classified in tables : 

- general : contains all the posts. columns : post's url, publication date, duration, number of views, likes, comments, shares (including republications), hastags and categories
- specific : one for each categories with the same columns

and that approximatively all that I could thin of. 