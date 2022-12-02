import React from "react"


import '../asset/css/style.css'
import '../asset/css/animation/animation.css'
import '../asset/css/mediaDoc/mediaDoc.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'
import CVVDynamique from "../asset/js/actucaroucel";
import AdminMediadoc from "./page/adminpage/AdminMediadoc";

export default function MediaDoc() {

    return (
        <>
            <header>
                <ul class="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp" src="/Bloc marque MGP + CVV.png"/>
                    </a>
                    <a href="/Actuality">
                        <li>ACTUALITES DU RESEAU</li>
                    </a>
                    <a href="/MediaDoc">
                        <li id="headselect">MEDIATHEQUE</li>
                    </a>
                    <a href="/Animation">
                        <li>ECHANGES ET PARTAGES</li>
                    </a>
                    <a href="/Contact">
                        <li>ANNUAIRE</li>
                    </a>
                    <a href="/Partenaire">
                        <li>PARTENAIRES</li>
                    </a>
                    {/* <!--<a href="/page/tools.html">
                        <li>BOITE A OUTILS</li>
                    </a>-->*/}
                    <a href="/profil">
                        <div class="tooltipDASH">
                            <img id="logoprofilhead" alt="logo profil" src="/user_profile_icon_176439.svg"/>
                        </div>
                    </a>
                </ul>
            </header>

            <h1 class="hero"></h1>


            <div class="allmedia">

                <div class="table-wrapper firstdiv">

                    <h1 class="laUne">DERNIERES PUBLICATIONS</h1>

                    {/*<!--<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" frameborder="0" height="40%"
                            src="https://www.youtube.com/embed/RZ3TpH-KQ_k"
                            style="
                border-radius: 15px;
            "
                            title="YouTube video player" width="100%"></iframe>-->*/}

                    <script src={AdminMediadoc.firebasedata}/>


                    <video controls height="600px" width="100%">
                        <source
                            src="https://firebasestorage.googleapis.com/v0/b/react-mgp-cci-44c73.appspot.com/o/Vid%C3%A9o%20Connect%20street_Trim.mp4?alt=media&token=eb4765ec-67a7-48f5-bfd5-c07be28318c3"
                            type="video/mp4"/>
                    </video>
                </div>

                {/*<iframe className="_2ynWu" title="Google Drive" aria-label="Google Drive" scrolling="no"
    src="https://wixlabs-drive.appspot.com/widget?lang=&amp;dateNumberFormat=&amp;isPrimaryLanguage=true&amp;pageId=j09uf&amp;compId=comp-l2055t2y&amp;viewerCompId=comp-l2055t2y&amp;siteRevision=-1&amp;viewMode=editor&amp;deviceType=desktop&amp;locale=fr&amp;tz=Europe%2FParis&amp;regionalLanguage=fr&amp;width=895&amp;height=897&amp;instance=6DprhdxtkBAQz3JdNmvCKHzVQ8obrWclr-xaGSWfCn8.eyJpbnN0YW5jZUlkIjoiNmQxZTVjMjktMGMwNS00Y2IxLTk5YjgtOThhYjZkM2M3ZDJiIiwiYXBwRGVmSWQiOiIxMmQwMzkxZi1mN2EyLTlmNDMtMTUzZC04ODNmOTAxN2UyNTIiLCJtZXRhU2l0ZUlkIjoiYmUxYTU1MzUtOWIyMS00MTY2LTgzNjctY2I4NzIzMjYzNTM4Iiwic2lnbkRhdGUiOiIyMDIyLTA0LTE1VDA4OjAxOjE4Ljk0M1oiLCJ1aWQiOiIyYzI2ZDMwNS05Yzc1LTRiM2EtOGFkYS04ZTcyYTVmOTE4YWQiLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJiaVRva2VuIjoiZDMwNDA5MWMtOTcyNC0wZGQ3LTFhZGYtNTMyYzRlMWE0ODEzIiwic2l0ZU93bmVySWQiOiIyYzI2ZDMwNS05Yzc1LTRiM2EtOGFkYS04ZTcyYTVmOTE4YWQiLCJzaXRlTWVtYmVySWQiOiIyYzI2ZDMwNS05Yzc1LTRiM2EtOGFkYS04ZTcyYTVmOTE4YWQiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjItMDQtMTVUMTI6MDE6MTguOTQzWiIsImxvZ2luQWNjb3VudElkIjoiMmMyNmQzMDUtOWM3NS00YjNhLThhZGEtOGU3MmE1ZjkxOGFkIn0&amp;currency=EUR&amp;currentCurrency=EUR&amp;commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%22%22%2C%22BSI%22%3A%22%22%7D"
    allowFullScreen="" allowTransparency="true" allowvr="true" frameBorder="0"
    allow="autoplay;camera;microphone;geolocation;vr"/>*/}

                <div id="divnew">

                    {/*<div class="wrapper">


                        <div class="wrap-1">
                            <input id="tab-1" name="tabs" type="radio"/>
                            <label htmlFor="tab-1">
                                <div class="nametitle">Communiquer sur le territoire</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-1" name="question" type="radio"/>
                                    <label htmlFor="question-1">
                                        <div>marketing territorial</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1IvgWNrwL16WRfJ5pkoir7MTxEJEMUVWK?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-2" name="question" type="radio"/>
                                    <label htmlFor="question-2">
                                        <div>identité/marque</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1zdZjnTfa4iK4tfUSzJgFkgW7YTmK-pDR?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>

                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-3" name="question" type="radio"/>
                                    <label htmlFor="question-3">
                                        <div>réseaux sociaux</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1_ahmaAZF1OkAv6YEkn74HcvA2kSA8y3I?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-2">
                            <input id="tab-2" name="tabs" type="radio"/>
                            <label htmlFor="tab-2">
                                <div class="nametitle">Animer son territoire</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-21" name="question" type="radio"/>
                                    <label htmlFor="question-21">
                                        <div>association de commerçants</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/129BM06FJfWlI1Hb3nJciCsVUyHM2Hegw?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-22" name="question" type="radio"/>
                                    <label htmlFor="question-22">
                                        <div>événements et animation commerciale</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1Jw0FPfwxPGywVQlOkPN0YYvrLx1U72ep?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-23" name="question" type="radio"/>
                                    <label htmlFor="question-23">
                                        <div>boutiques éphémères</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1abesBdz0tTb8NzAs3aSb7vmllf097Eh2?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-3">
                            <input id="tab-3" name="tabs" type="radio"/>
                            <label htmlFor="tab-3">
                                <div class="nametitle">Développer et dynamiser son commerce</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-31" name="question" type="radio"/>
                                    <label htmlFor="question-31">
                                        <div>financement</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1pQptyD3Cb0Sq6yaGKP2LGQsKLy2YfDYO?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-32" name="question" type="radio"/>
                                    <label htmlFor="question-32">
                                        <div>relation porteurs de projets</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1yLLmlEg3bc9McY2hsxPBozTCLWwLdc5N?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-33" name="question" type="radio"/>
                                    <label htmlFor="question-33">
                                        <div>investisseurs</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1dvvKC3vfeTQm3kVg9UO_r34qsaYYieHv?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-34" name="question" type="radio"/>
                                    <label htmlFor="question-34">
                                        <div>vacance</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1InLFfhNTA5_8T2KsDcGZ_BgH1VS-u9_g?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-35" name="question" type="radio"/>
                                    <label htmlFor="question-35">
                                        <div>enseignes</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1wyKm0qLQPsB4cx5WDe3Ss-0VM89oJK_i?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-4">
                            <input id="tab-4" name="tabs" type="radio"/>
                            <label htmlFor="tab-4">
                                <div class="nametitle">Organiser et aménager son territoire</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-41" name="question" type="radio"/>
                                    <label htmlFor="question-41">
                                        <div>nature en ville</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/11l0R5Tna8LLo-p2TT5_ZeuMfqfP2yq6Y?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-42" name="question" type="radio"/>
                                    <label htmlFor="question-42">
                                        <div>urbanisme commercial et réglementaire</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1lCb4EBEmncivXgfq-H8Zemp4m23yCPx4?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-43" name="question" type="radio"/>
                                    <label htmlFor="question-43">
                                        <div>logistique urbaine</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1ZWtYoRNMtD_kKHNLakPGS8jS1LsreT26?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-44" name="question" type="radio"/>
                                    <label htmlFor="question-44">
                                        <div>économie sociale et solidaire</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1-GbCWjsFppYoMIy3p-na9iYGbsEbJtRy?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-45" name="question" type="radio"/>
                                    <label htmlFor="question-45">
                                        <div>halles et marchés</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/17tORGt9im93bbxe4k9nFsoSSrZf3WAQb?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-46" name="question" type="radio"/>
                                    <label htmlFor="question-46">
                                        <div>occupation de l’espace public</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/146yvLhl4e57p7A1dRFXJuvevaq1UkHYk?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-47" name="question" type="radio"/>
                                    <label htmlFor="question-47">
                                        <div>tiers lieux</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1oAia1zD9vFH4SMxWzZVvYJJmYwzLvXPb?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-5">
                            <input id="tab-5" name="tabs" type="radio"/>
                            <label htmlFor="tab-5">
                                <div class="nametitle">Professionnaliser les acteurs</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-51" name="question" type="radio"/>
                                    <label htmlFor="question-51">
                                        <div>observation économique</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1TCgMtjpiCM07LytVKhGTpV1D8sdRjyl8?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-52" name="question" type="radio"/>
                                    <label htmlFor="question-52">
                                        <div>veille</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1eW25sbF6MwQvJviq3fdBXLkOJ-dpD4Dq?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-53" name="question" type="radio"/>
                                    <label htmlFor="question-53">
                                        <div>analyse de l’offre</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1n0WO9rdBciu6_VP2wJGo0c5nQI9Nj017?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-54" name="question" type="radio"/>
                                    <label htmlFor="question-54">
                                        <div>comportements de consommation</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1gubkZShBFewbGthvMaIPVAu_DXXD6kHh?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-55" name="question" type="radio"/>
                                    <label htmlFor="question-55">
                                        <div>data</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1D4zKIYgFMylRFPU3qJ304H_h6XzCKKW2?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                    <div class="question-wrap">
                                        <input id="question-56" name="question" type="radio"/>
                                        <label htmlFor="question-56">
                                            <div>avis</div>
                                            <div class="cross"></div>
                                        </label>
                                        <div class="content">
                                            <p>
                                                <a href="https://drive.google.com/drive/folders/1wSu2AZHMFSJ_vM2xbDkKVOcYhntaRTGK?usp=sharing"
                                                   target="_blank">Voir tous les documents</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-57" name="question" type="radio"/>
                                    <label htmlFor="question-57">
                                        <div>occupation de l’espace public</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1y4v3l9P67se61GGbrSRP0QK-Ojbabt45?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                    <div class="question-wrap">
                                        <input id="question-58" name="question" type="radio"/>
                                        <label htmlFor="question-58">
                                            <div>initiatives inspirantes</div>
                                            <div class="cross"></div>
                                        </label>
                                        <div class="content">
                                            <p>
                                                <a href="https://drive.google.com/drive/folders/1ztEPHhMNg-QFRH9hqvVOoHz5UKtOYubs?usp=sharing"
                                                   target="_blank">Voir tous les documents</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-6">
                            <input id="tab-6" name="tabs" type="radio"/>
                            <label htmlFor="tab-6">
                                <div class="nametitle">Observer son territoire</div>
                                <div class="cross"></div>
                            </label>
                            <div class="questions">
                                <div class="question-wrap">
                                    <input id="question-61" name="question" type="radio"/>
                                    <label htmlFor="question-61">
                                        <div>nature en ville</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1hVro3ww7eMMufYBcJjwB_6S4TY3AjaHG?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-62" name="question" type="radio"/>
                                    <label htmlFor="question-62">
                                        <div>urbanisme commercial et réglementaire</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1PVBqWv6Om3qtiYgN4ysQi0l-8vB8SJ1r?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-63" name="question" type="radio"/>
                                    <label htmlFor="question-63">
                                        <div>logistique urbaine</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1TJJ2vAfljcsaRFQtnt09yq7S5dgdsUsA?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-64" name="question" type="radio"/>
                                    <label htmlFor="question-64">
                                        <div>économie sociale et solidaire</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1oX-XlKobdyI_0cjVLNqOuRA3ToglvloN?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-65" name="question" type="radio"/>
                                    <label htmlFor="question-65">
                                        <div>halles et marchés</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1QVmerKPNVOWGsh9LlLQKEf03bASyvM06?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-66" name="question" type="radio"/>
                                    <label htmlFor="question-66">
                                        <div>occupation de l’espace public</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/1jVyNTyAhtZF2iWjO_uChwzngZm8MxzCK?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="question-wrap">
                                    <input id="question-67" name="question" type="radio"/>
                                    <label htmlFor="question-67">
                                        <div>tiers lieux</div>
                                        <div class="cross"></div>
                                    </label>
                                    <div class="content">
                                        <p>
                                            <a href="https://drive.google.com/drive/folders/18tk9ewt-yrI6AUuvIp7cH4kv1naOxu4Z?usp=sharing"
                                               target="_blank">Voir tous les documents</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="wrap-7">
                            <input id="tab-7" name="tabs" type="radio"/>
                            <label htmlFor="tab-7">
                                <div class="nametitle">S’inspirer/partager</div>
                                <div class="cross"></div>
                            </label>
                            <div class="content">
                                <p><a
                                    href="https://drive.google.com/drive/folders/1QhlHN6O6ZWVnSQBU9DXaV_NQc-fEczqn?usp=sharing"
                                    target="_blank">Voir tous les documents</a>
                                </p>
                            </div>
                        </div>


                        <div class="wrap-8">
                            <input id="tab-8" name="tabs" type="radio"/>
                            <label htmlFor="tab-8">
                                <div class="nametitle">Boite à outils documentaire du manager</div>
                                <div class="cross"></div>
                            </label>
                            <div class="content">
                                <p><a
                                    href="https://drive.google.com/drive/folders/1y0jCL7wNgFvejyhNMw5eLZhLB0yfpNUu?usp=sharing"
                                    target="_blank">Voir tous les documents</a>
                                </p>
                            </div>
                        </div>

                        <div class="wrap-7">
                            <input id="tab-9" name="tabs" type="radio"/>
                            <label htmlFor="tab-9">
                                <div class="nametitle">Supports d'ateliers</div>
                                <div class="cross"></div>
                            </label>
                            <div class="content">
                                <p><a
                                    href="https://drive.google.com/drive/folders/1yK4-cfKiKguO04dNIsB0mJJQT83XAtFS?usp=sharing"
                                    target="_blank">Voir tous les documents</a>
                                </p>
                            </div>
                        </div>


                    </div>*/}
                    <ul>
                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1yK4-cfKiKguO04dNIsB0mJJQT83XAtFS?usp=sharing">
                                <p class="linkdrive">Support d'ateliers</p>
                            </a>
                        </li>
                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1QhlHN6O6ZWVnSQBU9DXaV_NQc-fEczqn?usp=sharing">
                                <p class="linkdrive">S'inspirer / partager</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1W7crxZR69VcUknRlLPC-M6joKqcXBnIK?usp=sharing">
                                <p class="linkdrive">Professionnaliser</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/19vAXR-K_zWf2_62Yj_1kW7CGSdns2fNS?usp=sharing">
                                <p class="linkdrive">Organiser</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1u3u_hPtYW2AJdqki_l7JQ0nuGJFNs_Av?usp=sharing">
                                <p class="linkdrive">Observer</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1UwZbGmhFQNPDuUafL8WCCghsdTlfbvkV?usp=sharing">
                                <p class="linkdrive">Dévlopper</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/18T7aGMzgfnKrVUQTtYXJTgVV0Wm2-NhM?usp=sharing">
                                <p class="linkdrive">Communiquer</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1FYKH8T8nUfXQFZJc2mfu2PmO7B8KNfcm?usp=sharing">
                                <p class="linkdrive">animer</p>
                            </a>
                        </li>

                        <li class="lidrive">
                            <a target="_blank"
                               href="https://drive.google.com/drive/folders/1y0jCL7wNgFvejyhNMw5eLZhLB0yfpNUu?usp=sharing">
                                <p class="linkdrive">Boite à outils du manager</p>
                            </a>
                        </li>
                    </ul>

                    {/*
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1sV0TvPFOxyTvH6grBTBiogCtWf8p2OzU#grid" height="90%" width="700em"/>
*/}

                </div>
            </div>

            <div class="page-wrapper">
                <footer>
                    <div class="footer-top">
                        <div class="">

                        </div>
                        <div class="container">
                            <div class="">
                                <div class="">
                                    <div class="widget footer_widget">
                                        <h5 class="footer-title">Adresse</h5>
                                        <p class="padress">CCI Paris Ile-de-France: 27 Avenue de Friedland,
                                            75008
                                            Paris</p>
                                        <p class="padress">Métropole du Grand Paris: 17 Avenue Pierre Mendès,
                                            75013
                                            Paris</p>
                                    </div>
                                    <a target="_blank" href="https://www.metropolegrandparis.fr/fr"><img
                                        class="logoccimgp"
                                        src="https://www.metropolegrandparis.fr/themes/custom/customer/logo.svg"
                                        alt="mgp"/></a>
                                    <a target="_blank" href="https://www.cci-paris-idf.fr/fr"><img
                                        class="logoccimgp ccilogofooter"
                                        src="CCI%20Paris%20IDF%20RVB%20negatif_SF.png"
                                        alt="cci"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="containerback">

                                <div class="">
                                    <div class="footer-site-info">2020 ©
                                        <a id="mentionslegales"
                                           href="https://metropolegrandparis.fr/fr/mentions-legales-150"
                                           target="_blank"
                                        > mentions légales </a>
                                    </div>
                                </div>

                                <div class="divreaseau">

                                    <div>

                                        <div class="connect">

                                            <a class="share facebook"
                                               href="https://www.facebook.com/MetropoleGrandParis/" rel="author"
                                               target="_blank">
                                                <img class="iconfooter" src="facebook.svg"/>
                                                <span class="clip">FACEBOOK</span>

                                            </a>

                                            <a class="share facebook Linkedin"
                                               href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                               rel="author" target="_blank">
                                                <img class="iconfooter" src="linkedin.svg"/>
                                                <span class="clip">LINKEDIN</span>

                                            </a>
                                            <a class="share youtube instagram"
                                               href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                               rel="author" target="_blank">
                                                <img class="iconfooter" src="instagram.svg"/>
                                                <span class="clip">INSTAGRAM</span>

                                            </a>

                                            <a class="share  youtube"
                                               href="https://www.youtube.com/channel/UCOA4MiI4UcpvqHT7R6sm1cA"
                                               target="_blank">
                                                <img class="iconfooter" src="youtube.svg"/>
                                                <span class="clip">YOU-TUBE</span>

                                            </a>

                                        </div>
                                    </div>
                                </div>


                                <div class="">
                                    <nav class=" "
                                         id="footer-navigation"
                                         role="navigation">
                                        <ul class="" id="footer-menu">

                                            <li class="menu-item-26"
                                                id="menu-item-26"><a
                                                class="menu-item-26"
                                                href="/">ACTUALITES DU RESEAU</a></li>

                                            <li class="menu-item-26"
                                                id="menu-item-26"><a
                                                class="menu-item-26"
                                                href="/MediaDoc">MEDIATHEQUE</a></li>

                                            <li class="menu-item-27"
                                                id="menu-item-27"><a
                                                href="/Animation">ECHANGES ET PARTAGES</a></li>
                                            <li class="menu-item-28"
                                                id="menu-item-28"><a
                                                href="/Contact">ANNUAIRE</a></li>
                                            <li class="menu-item-29"
                                                id="menu-item-29"><a
                                                href="/Partenaire">PARTENAIRES</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}