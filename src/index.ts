import { useMockApis } from '../config';
import giphyFetchMock from './api/mocks/giphy-fetch-mock';
import { mockPost } from './api/mocks/post-mock';
import { Network } from './api/requests';
import { displayBoard } from './board/board';
import "./index.css";

displayBoard();

async function fetchu() {
    console.log(await new Network(useMockApis && giphyFetchMock, useMockApis && mockPost).fetchBoardImages(4));
}
fetchu();