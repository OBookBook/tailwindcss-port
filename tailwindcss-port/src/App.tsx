import "./App.css";

function App() {
  return (
    <>
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center w-full px-8 md:px-14 lg:px-24">
          <div className="text-lg font-bold">Naobe Portfolio</div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="#home"
              className="hover:text-selected-text transition-all duration-300"
            >
              ホーム
            </a>
            <a
              href="#portfolio"
              className="hover:text-selected-text transition-all duration-300"
            >
              ポートフォリオ
            </a>
            <a
              href="#skils"
              className="hover:text-selected-text transition-all duration-300"
            >
              スキル
            </a>
            <a href="#contact">
              <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                お問い合わせ
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>
      <div
        id="home"
        className="container mt-16 flex justify-between items-center mx-auto px-8 w-full md:px-14 lg:px-24"
      >
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:my-36 lg:ml-20 justify-center md:justify-start max-w-xl flex flex-wrap">
            <h1 className="font-bold text-5xl text-center md:text-left md:text-6xl lg:text-7xl">
              TailwindCSS <br />
              あなたのビジョン <br />
              美しい形に
            </h1>
            <button className="px-6 py-4 mt-10 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
              <i className="fa-solid fa-rocket mr-1"></i>
              <span>続きを見る</span>
            </button>
          </div>
          <img
            src="./../public/human.jpeg"
            alt="human"
            className="md:absolute w-10/12 mt-12 mx-auto right-6 -z-10 md:w-3/5 md:mt-0 lg:w-3/6 lg:top-2 lg:right-52"
          />
        </div>
      </div>
      <div
        id="portfolio"
        className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">ポートフォリオ</h2>
          <p className="section-paragraph">Web APP</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                src="./../public/opengraph-image.png"
                alt={`Portfolio ${index}`}
                className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
              />
            ))}
          </div>
        </section>
      </div>
      <div
        id="skils"
        className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">スキルスタック</h2>
          <p className="section-paragraph">Skils</p>
          {[
            {
              icon: "fa-react",
              title: "React",
              badges: ["SPA", "フロントエンド"],
              description: "Reactでの開発を受けたまわっております",
            },
            {
              icon: "fa-laravel",
              title: "Laravel",
              badges: ["API", "バックエンド"],
              description: "Laravelでの開発を受けたまわっております",
            },
            {
              icon: "fa-docker",
              title: "Docker",
              badges: ["Docker", "コンテナ"],
              description: "主にDocker環境で開発を行っています",
            },
            {
              icon: "fa-aws",
              title: "AWS",
              badges: ["Cloud", "インフラ"],
              description: "AWSを使用したデプロイを行い",
            },
          ].map((skill, index) => (
            <div key={index} className="my-16">
              <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                <div className="mb-6 lg:mb-0 self-center">
                  <i
                    className={`fa-brands ${skill.icon} text-9xl text-blue-400`}
                  ></i>
                </div>
                <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                  <h3 className="text-3xl font-semibold">{skill.title}</h3>
                  <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    {skill.badges.map((badge, index) => (
                      <div key={index} className="badge">
                        {badge}
                      </div>
                    ))}
                  </div>
                  <p className="text-secondary">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div
        id="contact"
        className="container mt-52 pb-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">お問い合わせ</h2>
          <p className="section-paragraph">お仕事のご相談はこちらから</p>
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
            <div className="space-y-12">
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  お名前
                </label>
                <input
                  type="text"
                  className="w-full border border-inputBorder bg-input p-4"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="w-full border border-inputBorder bg-input p-4"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  メッセージ
                </label>
                <input
                  type="text"
                  className="w-full border border-inputBorder bg-input p-4"
                />
              </div>
              <button className="px-8 py-3 mt-10 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                <span>送信</span>
              </button>
            </div>
            <div>
              <p className="text-secondary">000-111-2222</p>
              <a href="mailto:XXXXX@gmail.co.jp">XXXXX@gmail.co.jp</a>
              <div className="mt-20 space-x-6">
                <a href="#">
                  <i className="fa-brands fa-twitter text-3xl text-blue-400"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook text-3xl text-blue-600"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram text-3xl text-pink-400"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
