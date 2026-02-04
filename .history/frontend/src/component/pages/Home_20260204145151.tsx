// import React, { useEffect, useState } from "react";

import Button from "../common/Button";

const Home = () => {
    return (
    <div>
        <h1>ホーム画面</h1>
        <Button
            style={{
                padding: "8px 16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                fontSize: "14px",
            }}>
                ボタン
        </Button>
    </div>
    );
}
export default Home;