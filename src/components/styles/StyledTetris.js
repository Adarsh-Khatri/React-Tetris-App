import styled from 'styled-components';


// BG Image
import bgImage from '../../img/bg.png';



// the whole window of our Tetris Game 
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size:cover;
  background-repeat:no-repeat;
  `;
  // background: url('https://images.unsplash.com/photo-1569864753955-572638f41b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80');

// it contains only two components (Stage,aside)
export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top:20px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    /*display: block;*/
    padding: 0 20px;
  }
`;