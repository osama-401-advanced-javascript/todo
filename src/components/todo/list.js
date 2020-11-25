import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListItems from './listItems';
import { SettingsContext } from '../../context/settings';

function TodoList(props) {
  const settingsContext = useContext(SettingsContext);
  const [render, setRender] = useState({ numberOfPagesArr: [], listArr: [] });
  const [shownItems, setShownItems] = useState({ listArr: [] });
  useEffect(() => {
    return () => {
      console.log('******************* UNMOUNTED');
    };
  }, []);
  useEffect(() => {
    let settings = { ...settingsContext.value };
    let listArr = [...props.list];
    if (settings.completedTasks === 'false')
      listArr = [
        ...listArr.filter((val) => {
          return !val.complete;
        }),
      ];
    listArr.sort((a, b) => b.difficulty - a.difficulty);
    if (settings.sort !== 'descending') listArr.reverse();
    let numberOfPages = Math.ceil(listArr.length / Number(settings.numberOfItems));
    let numberOfPagesArr = [];
    for (let i = 0; i < numberOfPages; i++) {
      numberOfPagesArr[i] = i;
    }
    setRender({ numberOfPagesArr, listArr });
    let limitedListArr = [];
    for (let i = 0; i < listArr.length && i < Number(settings.numberOfItems); i++) {
      limitedListArr[i] = listArr[i];
    }
    setShownItems({ listArr: limitedListArr });
  }, [props.list, settingsContext]);
  function _handleOnClick(event) {
    let limitedListArr = [];
    for (let i = 0; i < document.getElementsByClassName('itemsListGroup').length; i++) {
      document.getElementsByClassName('itemsListGroup')[i].innerHTML = '';
    }
    for (let i = 0, j = (event.target.value - 1) * Number(settingsContext.value.numberOfItems); render.listArr.length - j && i < Number(settingsContext.value.numberOfItems); j++, i++) {
      limitedListArr[i] = render.listArr[j];
    }

    console.log('limitedListArr>>>>>>>.', limitedListArr);
    setShownItems({ listArr: limitedListArr });
  }
  return (
    <>
      {<ListItems listArr={shownItems} handlers={{ handleComplete: props.handleComplete, handleDelete: props.handleDelete }} />}
      <Container>
        <Row>
          {render.numberOfPagesArr.map((val, indx) => (
            <Button onClick={_handleOnClick} className='m-2' value={indx + 1} key={indx + 1}>
              {' '}
              {indx + 1}
            </Button>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default TodoList;
