import React from 'react';
import '../component/Page.css'
import Card from './Card';
import ScrollBar from './ScrollBar';
export default function Page() {
  return (
    <div style={{ width: "90%", margin: "auto", backgroundColor: "white" }}>
      <div>
        <h1>Live Spaces</h1>
        <p><i class="fa-solid fa-circle-check"></i>All the NFT's on cyber either belong to or were minted by their space creator</p>
      </div>
      <ScrollBar />
      <Card />
    </div>
  )
}
