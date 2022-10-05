import React from 'react';
import './test.css';
import MediaCard from "./Card";

function App() {

    let games = [
        {
            data: {
                id: 1,
                type: "game",
                game_name: "God of War Рагнарёк",
                short_description: "Вооружившись верным оружием, в том числе топором Левиафан и клинками Хаоса, Кратос предстанет перед самым смертоносным испытанием, стремясь защитить свою семью. Вместе с Атреем они обрели множество новых способностей, поэтому эта героическая история будет полна зрелищных сражений.",
                header_image: "https://image.api.playstation.com/pr/bam-art/144/016/5597f0f6-0acf-4628-b931-592bb42065f6.jpg?w=620&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 2,
                type: "game",
                game_name: "Хогвартс. Наследие",
                short_description: "«Хогвартс. Наследие» – это ролевая игра с открытым миром, который известен вам по книгам о Гарри Поттере. Отправляйтесь в путешествие, находите фантастических тварей, меняйте своего персонажа, варите зелья, изучайте заклинания, развивайте таланты, чтобы стать настоящим волшебником.",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 3,
                type: "game",
                game_name: "TUNIC",
                short_description: "Исследуй земли, полные легенд, древних сил и яростных монстров. В изометрическом экшене TUNIC тебе предстоит большое путешествие в роли маленького лисенка. Ты просыпаешься среди руин, и все, что у тебя есть, — это любопытство. Сражайся с чудовищами, собирай волшебные предметы и раскрывай древние тайны.\n",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0301/KSalsBYWb0IuDrdD1SbptAd6.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
    ];

  return (
    <div className="app">
        <div className="large_cards">
            {games.map((item) =>
                <MediaCard variant="outlined" id={item.data.id} data={item.data} />
            )}
        </div>
    </div>
  );
}

export default App;
