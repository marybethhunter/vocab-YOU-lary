## Welcome to the vocab-YOU-lary application! [![Netlify Status](https://api.netlify.com/api/v1/badges/434b4a23-adec-4c3c-89e5-9b7b7877a236/deploy-status)](https://app.netlify.com/sites/mbh-sortinghat/deploys)

### [View Site](https://mbh-sortinghat.netlify.app/)

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

#### -Authentication: The user will have to log in to the app with Google. This is done through Google Firebase.

### [Loom video walkthrough](https://www.loom.com/share/7c2437d0eb3546fe975b1b52dd9a73b9)

### Relevant Links:
#### -[Figma Wireframe](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP?node-id=0%3A1)
#### -[Technical Flowchart](https://docs.google.com/presentation/d/1GnHJ9C6IibJGrH_QmL028yzhcYH4s_UxLHPADz78KJc/edit#slide=id.p)
#### -[View Site](https://mbh-sortinghat.netlify.app/)

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

<img width="960" alt="2021-08-06 (1)" src="https://user-images.githubusercontent.com/86667443/128573741-37984916-aee4-476c-b0ce-76f6f8e3d495.png">

<img width="913" alt="2021-08-06 (2)" src="https://user-images.githubusercontent.com/86667443/128573764-b4c9205e-bcdb-457b-a273-ccf8d7c94ecc.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
