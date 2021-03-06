## Welcome to the vocab-YOU-lary application! [![Netlify Status](https://api.netlify.com/api/v1/badges/0728a942-3439-4fce-a0ce-cb8d887bb876/deploy-status)](https://app.netlify.com/sites/vocab-you-lary/deploys)

### [View Site](https://vocab-you-lary.netlify.app)
### Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/vocab-YOU-lary.git
 $ cd vocab-YOU-lary
```

### About the User
#### -The ideal user is a student who needs to organize and study key terms in the world of web development.
#### -The user can create new cards with titles, descriptions, and categories. They can edit existing cards and delete cards they no longer need.

### Features: 
#### -CRUD: Cards can be created, read, updated, and deleted.
#### -Filtering: The vocabulary cards can be filtered by 'Tech' or 'Language'.
#### -Search: The cards can be searched via the searchbar.
#### -Sort: The cards can be sorted alphabetically and by date (newest or oldest) via a dropdown menu.

#### -Authentication: The user will have to log in to the app with Google. This is done through Google Firebase.

### [Loom video walkthrough](https://www.loom.com/share/3e1c7a2faf004449b61c4fb1d758cbd8)

### Relevant Links:
#### -[Figma Wireframe](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP?node-id=0%3A1)
#### -[Technical Flowchart](https://docs.google.com/presentation/d/1GnHJ9C6IibJGrH_QmL028yzhcYH4s_UxLHPADz78KJc/edit#slide=id.p)
#### -[View Site](https://vocab-you-lary.netlify.app)
#### -[ERD](https://dbdiagram.io/d/6137f41f825b5b0146f79b3a)

### Code Snippet:

```javascript
// CREATE CARDS
const createVocabTerm = (newVocab) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/.json`, newVocab)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAllVocabTerms(newVocab.uid).then((allVocab) => resolve(allVocab)));
    }).catch(reject);
});
```

### Screenshots:

<img width="958" alt="2021-09-11" src="https://user-images.githubusercontent.com/86667443/132959169-6a39aab0-b2b9-467c-89a7-3650688e0734.png">

<img width="907" alt="2021-09-11 (1)" src="https://user-images.githubusercontent.com/86667443/132959160-994f3e06-53f8-497f-9ce4-32cd115a9dfc.png">


### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
