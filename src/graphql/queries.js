/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      imageUri
      email
      phone
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        imageUri
        email
        phone
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      videoUri
      description
      userID
      user {
        id
        username
        imageUri
        email
        phone
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      songID
      song {
        id
        songName
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        description
        userID
        user {
          id
          username
          imageUri
          email
          phone
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        songID
        song {
          id
          songName
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          imageUri
          email
          phone
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        songID
        song {
          id
          songName
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      songName
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        songName
        imageUri
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
