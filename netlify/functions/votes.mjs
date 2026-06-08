import { getStore } from "@netlify/blobs";
import crypto from "node:crypto";
const MOVIES=[
  {
    "id": "empire-records",
    "title": "Empire Records",
    "year": 1995,
    "wiki": [
      "Empire Records (1995 film)",
      "Empire Records"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Empire_Records_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=uvIsvZlk4GE"
  },
  {
    "id": "almost-famous",
    "title": "Almost Famous",
    "year": 2000,
    "wiki": [
      "Almost Famous (2000 film)",
      "Almost Famous"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_2000_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Almost_Famous_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=aQXh_AaJXaM"
  },
  {
    "id": "reality-bites",
    "title": "Reality Bites",
    "year": 1994,
    "wiki": [
      "Reality Bites (1994 film)",
      "Reality Bites"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Reality_Bites_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=xDYGo0UgIVM"
  },
  {
    "id": "stand-by-me",
    "title": "Stand By Me",
    "year": 1986,
    "wiki": [
      "Stand by Me (film)",
      "Stand by Me"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_by_Me_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_by_Me_(film)_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_By_Me_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_By_Me_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_By_Me_1986_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_By_Me_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Stand_By_Me_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=jaiZ6ZQoO-Y"
  },
  {
    "id": "the-sandlot",
    "title": "The Sandlot",
    "year": 1993,
    "wiki": [
      "The Sandlot (1993 film)",
      "The Sandlot"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Sandlot_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=iXOOL6SygW8"
  },
  {
    "id": "the-princess-bride",
    "title": "The Princess Bride",
    "year": 1987,
    "wiki": [
      "The Princess Bride (film)",
      "The Princess Bride"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Princess_bride.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_1987_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Bride_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=O3CIXEAjcc8"
  },
  {
    "id": "clueless",
    "title": "Clueless",
    "year": 1995,
    "wiki": [
      "Clueless (1995 film)",
      "Clueless"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Clueless_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Clueless_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Clueless_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Clueless_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Clueless_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Mgjwq1ZzdPQ"
  },
  {
    "id": "the-parent-trap",
    "title": "The Parent Trap",
    "year": 1998,
    "wiki": [
      "The Parent Trap (1998 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Parent_Trap_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Parent_Trap_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Parent_Trap_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Parent_Trap_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Parent_Trap_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=PMAhVpgzmRU"
  },
  {
    "id": "10-things-i-hate-about-you",
    "title": "10 Things I Hate About You",
    "year": 1999,
    "wiki": [
      "10 Things I Hate About You (1999 film)",
      "10 Things I Hate About You"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/10_Things_I_Hate_About_You_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/10_Things_I_Hate_About_You_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/10_Things_I_Hate_About_You_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/10_Things_I_Hate_About_You_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/10_Things_I_Hate_About_You_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=uE7qjQlfoRs"
  },
  {
    "id": "a-league-of-their-own",
    "title": "A League of Their Own",
    "year": 1992,
    "wiki": [
      "A League of Their Own (1992 film)",
      "A League of Their Own"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/A_League_of_Their_Own_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/A_League_of_Their_Own_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/A_League_of_Their_Own_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/A_League_of_Their_Own_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/A_League_of_Their_Own_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=zA6RimS_isQ"
  },
  {
    "id": "now-and-then",
    "title": "Now and Then",
    "year": 1995,
    "wiki": [
      "Now and Then (1995 film)",
      "Now and Then"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Now_and_Then_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Now_and_Then_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Now_and_Then_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Now_and_Then_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Now_and_Then_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=RQLVzTtt2Ws"
  },
  {
    "id": "matilda",
    "title": "Matilda",
    "year": 1996,
    "wiki": [
      "Matilda (1996 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Matilda_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Matilda_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Matilda_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Matilda_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Matilda_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=1UigDLytK5A"
  },
  {
    "id": "fly-away-home",
    "title": "Fly Away Home",
    "year": 1996,
    "wiki": [
      "Fly Away Home (1996 film)",
      "Fly Away Home"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/FlyAwayHomePoster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Fly_Away_Home_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=8wI6nCMnq-4"
  },
  {
    "id": "jumanji",
    "title": "Jumanji",
    "year": 1995,
    "wiki": [
      "Jumanji (1995 film)",
      "Jumanji"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji1995Poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jumanji_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=eTjDsENDZ6s"
  },
  {
    "id": "hook",
    "title": "Hook",
    "year": 1991,
    "wiki": [
      "Hook (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Hook_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Hook_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Hook_1991_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Hook_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Hook_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=c-vwgt8cwEM"
  },
  {
    "id": "cool-runnings",
    "title": "Cool Runnings",
    "year": 1993,
    "wiki": [
      "Cool Runnings (1993 film)",
      "Cool Runnings"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_runnings_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cool_Runnings_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=hnR6g9B1LJg"
  },
  {
    "id": "the-mighty-ducks",
    "title": "The Mighty Ducks",
    "year": 1992,
    "wiki": [
      "The Mighty Ducks (1992 film)",
      "The Mighty Ducks"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mighty_Ducks_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mighty_Ducks_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mighty_Ducks_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mighty_Ducks_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mighty_Ducks_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Um_JU7HpSYQ"
  },
  {
    "id": "d2-the-mighty-ducks",
    "title": "D2: The Mighty Ducks",
    "year": 1994,
    "wiki": [
      "D2: The Mighty Ducks (1994 film)",
      "D2: The Mighty Ducks"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/D2_The_Mighty_Ducks_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/D2_The_Mighty_Ducks_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/D2_The_Mighty_Ducks_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/D2_The_Mighty_Ducks_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/D2_The_Mighty_Ducks_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=8YNQZ4MRmOU"
  },
  {
    "id": "free-willy",
    "title": "Free Willy",
    "year": 1993,
    "wiki": [
      "Free Willy (1993 film)",
      "Free Willy"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Free_Willy_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Free_Willy_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Free_Willy_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Free_Willy_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Free_Willy_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0106965/videogallery/"
  },
  {
    "id": "the-secret-garden",
    "title": "The Secret Garden",
    "year": 1993,
    "wiki": [
      "The Secret Garden (1993 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Secret_Garden_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Secret_Garden_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Secret_Garden_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Secret_Garden_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Secret_Garden_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0108071/videogallery/"
  },
  {
    "id": "sister-act",
    "title": "Sister Act",
    "year": 1992,
    "wiki": [
      "Sister Act (1992 film)",
      "Sister Act"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=e7yEf3gBvMw"
  },
  {
    "id": "sister-act-2-back-in-the-habit",
    "title": "Sister Act 2: Back in the Habit",
    "year": 1993,
    "wiki": [
      "Sister Act 2: Back in the Habit (1993 film)",
      "Sister Act 2: Back in the Habit"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_2_Back_in_the_Habit_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_2_Back_in_the_Habit_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_2_Back_in_the_Habit_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_2_Back_in_the_Habit_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Sister_Act_2_Back_in_the_Habit_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=hgXu9YTV2vQ"
  },
  {
    "id": "harriet-the-spy",
    "title": "Harriet the Spy",
    "year": 1996,
    "wiki": [
      "Harriet the Spy (1996 film)",
      "Harriet the Spy"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Harriet_the_Spy_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Harriet_the_Spy_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Harriet_the_Spy_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Harriet_the_Spy_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Harriet_the_Spy_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=pPUdYUdCofY"
  },
  {
    "id": "ever-after",
    "title": "Ever After",
    "year": 1998,
    "wiki": [
      "Ever After (1998 film)",
      "Ever After"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ever_After_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ever_After_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ever_After_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ever_After_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ever_After_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=szP9U0uLl5U"
  },
  {
    "id": "the-princess-diaries",
    "title": "The Princess Diaries",
    "year": 2001,
    "wiki": [
      "The Princess Diaries (2001 film)",
      "The Princess Diaries"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Diaries_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Diaries_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Diaries_2001_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Diaries_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Princess_Diaries_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=G3jzLo31DTk"
  },
  {
    "id": "twister",
    "title": "Twister",
    "year": 1996,
    "wiki": [
      "Twister (1996 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Twister_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Twister_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Twister_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Twister_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Twister_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=beHzfQPaTaw"
  },
  {
    "id": "men-in-black",
    "title": "Men in Black",
    "year": 1997,
    "wiki": [
      "Men in Black (1997 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Men_in_Black_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Men_in_Black_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Men_in_Black_1997_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Men_in_Black_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Men_in_Black_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0119654/videogallery/"
  },
  {
    "id": "the-mask",
    "title": "The Mask",
    "year": 1994,
    "wiki": [
      "The Mask (1994 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mask_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mask_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mask_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mask_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Mask_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=LZl69yk5lEY"
  },
  {
    "id": "mrs-doubtfire",
    "title": "Mrs. Doubtfire",
    "year": 1993,
    "wiki": [
      "Mrs. Doubtfire (1993 film)",
      "Mrs. Doubtfire"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mrs_Doubtfire_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mrs_Doubtfire_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mrs_Doubtfire_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mrs_Doubtfire_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mrs_Doubtfire_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=4vBPx-R__54"
  },
  {
    "id": "you-ve-got-mail",
    "title": "You've Got Mail",
    "year": 1998,
    "wiki": [
      "You've Got Mail (1998 film)",
      "You've Got Mail"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/You've_Got_Mail_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/You've_Got_Mail_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/You've_Got_Mail_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/You've_Got_Mail_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/You've_Got_Mail_Poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Youve_Got_Mail_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Youve_Got_Mail_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Youve_Got_Mail_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Youve_Got_Mail_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Youve_Got_Mail_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=bjP4s7UUnK8"
  },
  {
    "id": "she-s-all-that",
    "title": "She's All That",
    "year": 1999,
    "wiki": [
      "She's All That (1999 film)",
      "She's All That"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/She's_All_That_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/She's_All_That_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/She's_All_That_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/She's_All_That_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/She's_All_That_Poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Shes_All_That_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Shes_All_That_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Shes_All_That_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Shes_All_That_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Shes_All_That_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=ExDPiPhLqEQ"
  },
  {
    "id": "can-t-hardly-wait",
    "title": "Can't Hardly Wait",
    "year": 1998,
    "wiki": [
      "Can't Hardly Wait (1998 film)",
      "Can't Hardly Wait"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Can't_Hardly_Wait_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Can't_Hardly_Wait_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Can't_Hardly_Wait_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Can't_Hardly_Wait_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Can't_Hardly_Wait_Poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cant_Hardly_Wait_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cant_Hardly_Wait_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cant_Hardly_Wait_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cant_Hardly_Wait_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Cant_Hardly_Wait_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=qukvN6ieeMY"
  },
  {
    "id": "never-been-kissed",
    "title": "Never Been Kissed",
    "year": 1999,
    "wiki": [
      "Never Been Kissed (1999 film)",
      "Never Been Kissed"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Never_Been_Kissed_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Never_Been_Kissed_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Never_Been_Kissed_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Never_Been_Kissed_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Never_Been_Kissed_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0151738/videogallery/"
  },
  {
    "id": "jurassic-park",
    "title": "Jurassic Park",
    "year": 1993,
    "wiki": [
      "Jurassic Park (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jurassic_Park_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jurassic_Park_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jurassic_Park_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jurassic_Park_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jurassic_Park_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=_jKEqDKpJLw"
  },
  {
    "id": "independence-day",
    "title": "Independence Day",
    "year": 1996,
    "wiki": [
      "Independence Day (1996 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Independence_Day_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Independence_Day_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Independence_Day_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Independence_Day_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Independence_Day_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=B1E7h3SeMDk"
  },
  {
    "id": "singles",
    "title": "Singles",
    "year": 1992,
    "wiki": [
      "Singles (1992 film)",
      "Singles"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Singles_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Singles_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Singles_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Singles_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Singles_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=b4tQFsPTGXI"
  },
  {
    "id": "romeo-juliet",
    "title": "Romeo + Juliet",
    "year": 1996,
    "wiki": [
      "Romeo + Juliet"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Romeo_%2B_Juliet_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Romeo_%2B_Juliet_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Romeo_%2B_Juliet_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Romeo_%2B_Juliet_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Romeo_%2B_Juliet_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=8VOAxzgq42A"
  },
  {
    "id": "the-craft",
    "title": "The Craft",
    "year": 1996,
    "wiki": [
      "The Craft (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Craft_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Craft_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Craft_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Craft_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Craft_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=SxEqB--5ToI"
  },
  {
    "id": "practical-magic",
    "title": "Practical Magic",
    "year": 1998,
    "wiki": [
      "Practical Magic (1998 film)",
      "Practical Magic"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Practical_Magic_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Practical_Magic_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Practical_Magic_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Practical_Magic_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Practical_Magic_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0120791/videogallery/"
  },
  {
    "id": "waiting-to-exhale",
    "title": "Waiting to Exhale",
    "year": 1995,
    "wiki": [
      "Waiting to Exhale (1995 film)",
      "Waiting to Exhale"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waiting_to_Exhale_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waiting_to_Exhale_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waiting_to_Exhale_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waiting_to_Exhale_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waiting_to_Exhale_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=t5iE3Wt2cJs"
  },
  {
    "id": "forrest-gump",
    "title": "Forrest Gump",
    "year": 1994,
    "wiki": [
      "Forrest Gump (1994 film)",
      "Forrest Gump"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Forrest_Gump_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Forrest_Gump_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Forrest_Gump_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Forrest_Gump_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Forrest_Gump_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=24lVucZ0JyE"
  },
  {
    "id": "titanic",
    "title": "Titanic",
    "year": 1997,
    "wiki": [
      "Titanic (1997 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Titanic_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Titanic_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Titanic_1997_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Titanic_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Titanic_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    "id": "the-truman-show",
    "title": "The Truman Show",
    "year": 1998,
    "wiki": [
      "The Truman Show (1998 film)",
      "The Truman Show"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Truman_Show_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Truman_Show_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Truman_Show_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Truman_Show_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Truman_Show_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=dlnmQbPGuls"
  },
  {
    "id": "pump-up-the-volume",
    "title": "Pump Up the Volume",
    "year": 1990,
    "wiki": [
      "Pump Up the Volume (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pump_Up_the_Volume_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pump_Up_the_Volume_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pump_Up_the_Volume_1990_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pump_Up_the_Volume_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pump_Up_the_Volume_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=uo-km-qfJe8"
  },
  {
    "id": "drive-me-crazy",
    "title": "Drive Me Crazy",
    "year": 1999,
    "wiki": [
      "Drive Me Crazy (1999 film)",
      "Drive Me Crazy"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Drive_Me_Crazy_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Drive_Me_Crazy_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Drive_Me_Crazy_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Drive_Me_Crazy_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Drive_Me_Crazy_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0164114/videogallery/"
  },
  {
    "id": "ghost-world",
    "title": "Ghost World",
    "year": 2001,
    "wiki": [
      "Ghost World (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ghost_World_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ghost_World_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ghost_World_2001_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ghost_World_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Ghost_World_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=juzGS-GN79M"
  },
  {
    "id": "that-thing-you-do",
    "title": "That Thing You Do!",
    "year": 1996,
    "wiki": [
      "That Thing You Do! (1996 film)",
      "That Thing You Do!"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/That_Thing_You_Do_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/That_Thing_You_Do_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/That_Thing_You_Do_1996_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/That_Thing_You_Do_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/That_Thing_You_Do_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Xnanfx0vcEM"
  },
  {
    "id": "airheads",
    "title": "Airheads",
    "year": 1994,
    "wiki": [
      "Airheads (1994 film)",
      "Airheads"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Airheads_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Airheads_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Airheads_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Airheads_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Airheads_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=fjvdxfIb0fA"
  },
  {
    "id": "jawbreaker",
    "title": "Jawbreaker",
    "year": 1999,
    "wiki": [
      "Jawbreaker (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jawbreaker_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jawbreaker_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jawbreaker_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jawbreaker_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Jawbreaker_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0155776/videogallery/"
  },
  {
    "id": "angus",
    "title": "Angus",
    "year": 1995,
    "wiki": [
      "Angus (1995 film)",
      "Angus"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Angus_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Angus_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Angus_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Angus_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Angus_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0112368/videogallery/"
  },
  {
    "id": "mallrats",
    "title": "Mallrats",
    "year": 1995,
    "wiki": [
      "Mallrats (1995 film)",
      "Mallrats"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mallrats_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mallrats_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mallrats_1995_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mallrats_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Mallrats_Poster.jpg"
    ],
    "trailerUrl": "https://www.imdb.com/title/tt0113749/videogallery/"
  },
  {
    "id": "13-going-on-30",
    "title": "13 Going on 30",
    "year": 2004,
    "wiki": [
      "13 Going on 30"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/13_Going_on_30_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/13_Going_on_30_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/13_Going_on_30_2004_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/13_Going_on_30_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/13_Going_on_30_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=qn9IMe5joN8"
  },
  {
    "id": "freaky-friday",
    "title": "Freaky Friday",
    "year": 2003,
    "wiki": [
      "Freaky Friday (2003 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Freaky_Friday_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Freaky_Friday_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Freaky_Friday_2003_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Freaky_Friday_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Freaky_Friday_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=UShtvCen6So"
  },
  {
    "id": "pleasantville",
    "title": "Pleasantville",
    "year": 1998,
    "wiki": [
      "Pleasantville (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pleasantville_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pleasantville_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pleasantville_1998_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pleasantville_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Pleasantville_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=dSDm62Hmbf4"
  },
  {
    "id": "blast-from-the-past",
    "title": "Blast from the Past",
    "year": 1999,
    "wiki": [
      "Blast from the Past (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Blast_from_the_Past_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Blast_from_the_Past_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Blast_from_the_Past_1999_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Blast_from_the_Past_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Blast_from_the_Past_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=AhMQOb0tEmI"
  },
  {
    "id": "groundhog-day",
    "title": "Groundhog Day",
    "year": 1993,
    "wiki": [
      "Groundhog Day (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Groundhog_Day_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Groundhog_Day_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Groundhog_Day_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Groundhog_Day_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Groundhog_Day_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=GncQtURdcE4"
  },
  {
    "id": "wayne-s-world",
    "title": "Wayne's World",
    "year": 1992,
    "wiki": [
      "Wayne's World",
      "Wayne's World (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Wayne's_World_Poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waynes_World_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waynes_World_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waynes_World_1992_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waynes_World_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Waynes_World_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=OIuhsHpcNAU"
  },
  {
    "id": "kindergarten-cop",
    "title": "Kindergarten Cop",
    "year": 1990,
    "wiki": [
      "Kindergarten Cop (1990 film)",
      "Kindergarten Cop"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_1990_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Kindergarten_Cop_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=PeH_fzD5W8w"
  },
  {
    "id": "speed",
    "title": "Speed",
    "year": 1994,
    "wiki": [
      "Speed (1994 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Speed_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=8piqd2BWeGI"
  },
  {
    "id": "air-force-one",
    "title": "Air Force One",
    "year": 1997,
    "wiki": [
      "Air Force One (film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_1997_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Air_Force_One_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=TP80mEgmQSw"
  },
  {
    "id": "the-fugitive",
    "title": "The Fugitive",
    "year": 1993,
    "wiki": [
      "The Fugitive (1993 film)"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_movie.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_1993_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/The_Fugitive_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=ETPVU9ytk8o"
  },
  {
    "id": "dumb-and-dumber",
    "title": "Dumb and Dumber",
    "year": 1994,
    "wiki": [
      "Dumb and Dumber (1994 film)",
      "Dumb and Dumber"
    ],
    "fileUrls": [
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumbanddumber.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_film_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_1994_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_movie_poster.jpg",
      "https://en.wikipedia.org/wiki/Special:Redirect/file/Dumb_and_Dumber_Poster.jpg"
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=l13yPhimE3o"
  }
];
const STORE_NAME="family-movie-votes";const EVENT_PREFIX="events/";
function json(data,status=200){return Response.json(data,{status,headers:{"cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET,POST,OPTIONS","access-control-allow-headers":"content-type"}})}
function csvEscape(value){const s=String(value??"");return /[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}
async function aggregateCounts(store){const allowed=new Set(MOVIES.map(m=>m.id));const counts=Object.fromEntries(MOVIES.map(m=>[m.id,0]));const {blobs}=await store.list({prefix:EVENT_PREFIX});await Promise.all(blobs.map(async({key})=>{const entry=await store.get(key,{type:"json",consistency:"strong"});if(!entry||!allowed.has(entry.movieId))return;const delta=Number(entry.delta);if(!Number.isFinite(delta))return;counts[entry.movieId]=Math.max(0,(counts[entry.movieId]||0)+delta)}));return counts}
export default async (req)=>{if(req.method==="OPTIONS")return json({ok:true});const store=getStore({name:STORE_NAME,consistency:"strong"});try{const url=new URL(req.url);if(req.method==="POST"&&url.searchParams.get("clear")==="1"){const listed=await store.list({prefix:EVENT_PREFIX});await Promise.all((listed.blobs||[]).map(({key})=>store.delete(key)));const counts=Object.fromEntries(MOVIES.map((m)=>[m.id,0]));return json({ok:true,cleared:true,counts});}if(req.method==="GET"){const url=new URL(req.url);const counts=await aggregateCounts(store);if(url.searchParams.get("format")==="csv"){const rows=[["Movie Title","Year","Selections","Direct Trailer URL"]];MOVIES.map(m=>({...m,selections:counts[m.id]||0})).sort((a,b)=>b.selections-a.selections||a.title.localeCompare(b.title)).forEach(m=>rows.push([m.title,m.year,m.selections,m.trailerUrl]));const csv=rows.map(row=>row.map(csvEscape).join(",")).join("\n");return new Response(csv,{headers:{"content-type":"text/csv;charset=utf-8","cache-control":"no-store","content-disposition":"attachment; filename=family-movie-selection-tally.csv"}})}return json({counts,updatedAt:new Date().toISOString()})}if(req.method==="POST"){const body=await req.json().catch(()=>({}));const movieId=String(body.movieId||"");const delta=Number(body.delta);const allowed=new Set(MOVIES.map(m=>m.id));if(!allowed.has(movieId))return json({error:"Unknown movieId"},400);if(![1,-1].includes(delta))return json({error:"delta must be 1 or -1"},400);const before=await aggregateCounts(store);if(delta<0&&(before[movieId]||0)<=0)return json({ok:true,counts:before});const key=`${EVENT_PREFIX}${Date.now()}-${crypto.randomUUID()}.json`;await store.setJSON(key,{movieId,delta,createdAt:new Date().toISOString(),userAgent:req.headers.get("user-agent")||""},{onlyIfNew:true});const counts=await aggregateCounts(store);return json({ok:true,counts})}return json({error:"Method not allowed"},405)}catch(error){return json({error:error.message||"Unknown error"},500)}};
export const config={path:"/.netlify/functions/votes"};