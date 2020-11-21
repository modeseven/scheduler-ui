import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No requests, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Appointment Requests</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.firstName} </span>
            <span className='repo-description'>{repo.lastName}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;