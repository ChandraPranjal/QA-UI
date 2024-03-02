import React, { useState } from "react";
import SendMessage from "./SendMessage";

function Content() {
  const [searchHeight, setSearchHeight] = useState("45px");
  return (
    <div className="bg-base-200 grid grid-cols-12 h-[calc(100vh-7rem)]">
      <div className="bg-base-300 col-span-2 w-50 overflow-y-scroll">
        <div className="bg-green-400 w-20 h-20 my-1">1</div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1"></div>
        <div className="bg-green-400 w-20 h-20 my-1 text-red-600">10</div>
      </div>

      <div
        className="col-span-10 overflow-auto"
        style={{ height: `calc(100% -${searchHeight})` }}
      >
        <div className="hero flex flex-col">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum velit molestias temporibus deserunt eum a, vero quasi
                nisi quia expedita quis, saepe distinctio facere dolorum labore
                adipisci! Fugit, ipsa eos. Doloremque asperiores consequuntur
                tenetur odit nihil eum illum aliquam autem distinctio maxime
                facere, explicabo tempora nisi animi quasi saepe non hic.
                Necessitatibus obcaecati, delectus suscipit dignissimos nam et
                dicta iste. Cupiditate ullam, neque ab molestiae earum facilis
                sapiente, totam iste sequi vel velit ea. Similique at ut est
                optio a tenetur, explicabo porro officia voluptas aut eum quos
                totam quidem. Ratione dolores aliquam corrupti ab sapiente sed
                itaque modi, exercitationem numquam dolor repellendus quia eum
                vitae beatae. Ullam consequuntur voluptatibus et libero, optio
                repudiandae minus nemo veritatis distinctio quo in. Voluptatem
                porro placeat itaque voluptas accusamus tempora perferendis,
                temporibus ipsam adipisci aliquid nisi necessitatibus recusandae
                quaerat maxime fugit sunt quos quisquam vel libero enim maiores,
                odit ab culpa possimus. Itaque. Expedita, libero quis corrupti
                sapiente iure earum dignissimos quidem ea distinctio provident
                exercitationem illum vel magnam laborum? Impedit animi iure
                officia, sit, cum saepe inventore porro nam ex earum vitae!
                Mollitia laudantium perferendis odio quo delectus reiciendis
                officiis saepe natus quaerat labore velit, magnam deserunt nulla
                hic illum, culpa, accusantium necessitatibus eveniet vero
                tempore nobis dicta facere? Harum, expedita error? Aut saepe,
                placeat inventore repellendus eum ex, odit perferendis explicabo
                excepturi provident possimus, consequatur eligendi aspernatur
                quasi. Laborum neque magnam culpa libero nam. Tempora harum
                totam atque porro sunt. Ad. Dolore magnam culpa sunt omnis?
                Rerum perferendis odit laboriosam atque quo, repellat at
                molestias eligendi nesciunt in autem animi illum! Facere, dolore
                maxime. Quasi eveniet maiores dolore. Numquam, deleniti tenetur.
                Atque, alias debitis dignissimos quisquam explicabo natus dicta
                eaque reiciendis? Commodi exercitationem neque odio, illum nam
                reprehenderit nulla, dolor quia quibusdam molestiae omnis,
                laboriosam ducimus consequatur harum! Delectus, neque hic!
                Recusandae, mollitia numquam fuga nesciunt iure, placeat,
                laborum totam ipsa porro debitis alias magni enim hic autem
                iusto? Modi dolor molestias tempora dolore blanditiis quidem
                corporis iure vero possimus architecto! Accusantium officia
                repellat possimus doloremque saepe in quas itaque autem
                assumenda explicabo aliquid placeat libero tempore, iure, ipsa
                molestiae fugit numquam quos rerum soluta magni, consequatur
                quasi. Nesciunt, praesentium iusto! Nobis minus voluptatem qui
                odit? Reprehenderit non explicabo commodi cumque exercitationem
                omnis numquam expedita, id dignissimos nulla excepturi nobis
                cupiditate quos! Adipisci ratione magni non praesentium
                repellendus perspiciatis optio dolore. Nostrum iste, maiores
                deleniti autem eius eos tempora quas suscipit assumenda
                recusandae doloremque quisquam delectus id omnis blanditiis sunt
                alias quia dignissimos odit provident quo. Praesentium quam
                error quia quos. Sed, consequatur. Quis voluptas hic ab vel
                repellat quidem explicabo incidunt officia doloremque
                perferendis quas, libero facilis harum provident unde
                distinctio! Tempore deleniti iusto officiis dolore unde amet id
                voluptates. Deleniti tempora adipisci est eaque, amet officiis
                similique quaerat in, officia, illo id enim hic beatae voluptate
                aut. Harum fugit natus animi totam excepturi ex dolore
                necessitatibus laborum doloremque mollitia. Sequi recusandae rem
                sint repellendus accusamus earum iusto error, nisi in nemo alias
                cum voluptate doloremque ab enim quisquam inventore ex tempora.
                Odio ad, aspernatur esse minus quas sint incidunt! Nam nisi
                quasi laborum recusandae rerum maxime id ipsa tempora dolorum
                accusantium doloremque dignissimos quidem, harum qui
                voluptatibus! Ipsum enim aperiam mollitia debitis cum
                perspiciatis itaque, sunt vel eveniet architecto. Animi
                accusamus consectetur sapiente sint illum libero recusandae vel
                cum perspiciatis maiores non ipsa adipisci, earum tempora id
                nostrum nisi voluptatibus unde rem repellat reprehenderit nam
                fugiat nesciunt iusto. Consectetur. Voluptate eaque qui quae
                facere rerum error voluptatem vel, pariatur cum deserunt magni
                quisquam accusantium cumque facilis similique optio, mollitia
                culpa, odio dolores laudantium dignissimos fuga? Debitis vitae
                neque voluptate? Officiis ea, quos expedita itaque, cupiditate
                nulla quia non hic error maxime aliquid commodi molestiae?
                Accusamus ab qui molestiae voluptates, voluptatum similique aut
                in distinctio consectetur perferendis inventore eligendi
                expedita! Eaque explicabo cumque aut perferendis, cupiditate
                maxime alias incidunt praesentium veniam accusantium quidem nemo
                quasi repudiandae distinctio temporibus corporis eos possimus ab
                quaerat. Accusamus provident quod, consequuntur ullam ex
                perspiciatis? Possimus obcaecati consequatur in doloremque
                consectetur, porro magnam quis aliquam iure quia animi odio
                omnis cum nam quae excepturi, laboriosam a, asperiores libero.
                Exercitationem, dolorem eaque quae harum ipsam aperiam.
                Laudantium sapiente nihil, cumque vel ex, enim eos illum,
                assumenda doloribus quibusdam neque similique aperiam voluptatem
                doloremque perferendis earum nobis iure sequi dolorem eius
                maiores optio? Quibusdam illum expedita illo. Nesciunt, fugit?
                Voluptates aspernatur praesentium, aut dolor temporibus numquam,
                excepturi labore dignissimos deleniti facilis, repellat
                perferendis? Iusto cupiditate, quae qui quo explicabo in aut
                ipsam a nihil temporibus sapiente voluptates! Quis accusamus
                ipsum, nam ducimus ipsa molestiae non porro illum!
                Exercitationem at porro saepe voluptate cupiditate optio, cum
                dicta animi! Blanditiis assumenda harum laborum at nesciunt
                aperiam velit esse nulla? Repellat delectus beatae aperiam
                fugiat quos velit, est esse quia explicabo nisi accusantium nemo
                maxime suscipit quas natus iure nulla. Voluptates ipsum aperiam
                aspernatur neque officia inventore quis impedit molestias.
                Quisquam repudiandae odit asperiores fuga soluta labore nihil
                repellat similique, necessitatibus quia illo aliquid, explicabo
                temporibus quae blanditiis eligendi reprehenderit sit. Dolore
                possimus, ratione ut aperiam non omnis error laudantium! Iure
                libero doloribus enim sequi exercitationem, esse voluptas
                aliquam. Inventore eos ea cupiditate iste unde accusantium harum
                rem autem fuga itaque magnam provident deleniti, eum nesciunt
                suscipit dignissimos dolores ipsa? Vitae eaque dolorem incidunt
                qui maiores dolorum saepe, doloremque id illum a totam. Deleniti
                cumque itaque commodi harum et facere! Aspernatur rerum, nostrum
                nobis quibusdam doloremque possimus omnis aliquam quae.
                Voluptatibus atque aliquam doloribus tempore corrupti ea optio
                aliquid unde vitae eaque dolores, cupiditate blanditiis autem
                qui at iusto reprehenderit maxime odio architecto nemo dicta.
                Aperiam vero perferendis eum nam! Consectetur consequuntur
                dolorem autem illo sit, cupiditate quisquam sint vitae fugiat
                ipsam totam similique minima illum voluptatibus nesciunt dolor,
                exercitationem voluptate laudantium! Itaque nobis vel dolore
                repudiandae, excepturi expedita at. Doloremque, fuga. Recusandae
                tempore nobis voluptatem odit aliquam sit at fugit eius, sed
                repellat suscipit aliquid nostrum obcaecati dignissimos ratione,
                cumque quia quasi cupiditate vitae, labore quod dolore
                reiciendis voluptatum! Possimus totam eveniet a quia adipisci
                accusamus itaque id voluptates repellendus doloremque, vitae,
                veritatis vel earum corporis dignissimos laudantium ut magni ab,
                ipsa molestias aliquam. Deleniti praesentium magnam numquam
                laborum? Recusandae tenetur iusto optio culpa ut suscipit
                magnam? Harum laboriosam nobis amet architecto fuga, laborum est
                accusamus odit nesciunt consequatur nemo, voluptas ex
                exercitationem doloribus nam esse ipsam incidunt? Ullam? Vel
                architecto veniam expedita, id repellat voluptatem asperiores
                dolore est rerum dolorem. Voluptatum at rerum, repudiandae neque
                mollitia esse! Adipisci voluptatibus eveniet minus beatae, a
                suscipit vitae hic dolorum optio! Eligendi, nemo magni adipisci
                obcaecati, rerum vel vitae voluptate, non nobis sed explicabo
                eveniet reprehenderit velit? Laborum quibusdam ad aliquid
                adipisci quia sit officiis consequuntur accusamus id, optio,
                dolore dolorum? Ab alias natus at accusamus ullam facilis ex est
                ea fugit, laudantium dolorum explicabo exercitationem corrupti!
                Soluta blanditiis vel rem, veniam, ab dicta tenetur deleniti
                praesentium, porro quia eaque natus? Iusto velit accusamus eum
                mollitia repellendus suscipit quidem, perferendis, voluptas
                totam illum aut, magnam quod vitae. Totam, in eos expedita fugit
                iure aut dignissimos, nihil quas cum dolorum, ad ipsa! Commodi
                tempore facilis ipsam optio quidem earum labore ab animi, minima
                libero excepturi dolor voluptate nostrum quas praesentium? Nihil
                dignissimos similique repellendus est consectetur, voluptate rem
                ea distinctio iusto accusantium! Blanditiis rerum veritatis
                consequatur neque nulla numquam veniam non iure quos eveniet,
                distinctio excepturi? Dicta deleniti quibusdam quae facere magni
                doloremque. Magni libero dolore ex maxime animi possimus tempora
                quae. Aut, error! Eos hic fugit tempora? Perferendis minima
                eveniet, earum sequi assumenda possimus est aliquid corrupti
                deserunt, vitae fugiat provident. Illo architecto voluptas iusto
                repellendus nobis, provident id natus autem? Et, harum modi
                tenetur est laborum ipsam quidem temporibus? Delectus quis
                corporis accusamus qui deleniti laborum iusto, aperiam at? Eum,
                distinctio ratione molestiae porro sapiente atque animi quod
                repellendus a? Ab, magnam reprehenderit laborum doloremque
                veritatis voluptatum dolorem quae consectetur sint. Amet
                perferendis eaque iste vitae, id unde consequatur autem, quo, ad
                laborum blanditiis tempora exercitationem quod hic
                necessitatibus cupiditate? Placeat eum incidunt ullam error,
                minus expedita eligendi quod in illo quidem, dolor perspiciatis
                inventore doloremque quisquam sunt quibusdam veniam dolorem
                corrupti eaque cum nostrum officia. Unde iste doloribus ipsam.
                Ullam saepe amet et minima minus facilis, eum neque recusandae
                iusto cumque itaque repudiandae. Exercitationem odio, amet
                minima placeat ea eum nam deleniti fuga! Sapiente voluptas
                tempora ipsum reiciendis doloremque. Sed corporis adipisci
                tempora nesciunt similique iure, ipsam saepe. Tempore temporibus
                ex enim commodi cum excepturi, neque sapiente dolorem officiis
                iusto fugit libero a non maxime distinctio labore nostrum eius!
                Id, molestiae in sit, hic ullam quia esse sapiente quis nobis
                cum, voluptates officia? Totam doloremque veniam culpa illum
                officiis, quas, qui nobis aspernatur sequi esse tempore nostrum
                dolorem quos? Saepe dicta molestias magni! Quis, voluptatum
                adipisci debitis libero accusantium provident sapiente suscipit
                tenetur impedit ducimus aut, doloremque dolorem placeat odio
                nobis nostrum voluptatibus soluta excepturi assumenda obcaecati
                hic eius? Eveniet, beatae molestiae. Enim, delectus. Itaque
                tenetur repellat, at harum nam tempora quam officia alias, rem
                unde animi cum nobis vitae minima illum ipsam praesentium quae
                recusandae, vero amet eaque. Accusamus ipsum voluptatum
                dignissimos quisquam nostrum quis, cupiditate nulla delectus
                ipsam placeat doloremque, iure consectetur ducimus enim officiis
                corrupti non at. Voluptas, amet quaerat libero a mollitia
                accusantium nulla deserunt. Soluta, repellat nulla sit culpa
                laudantium error neque, quod voluptate dolore consequuntur autem
                esse corporis dignissimos ad ex. Aliquid dolor molestias ut
                excepturi eius quaerat incidunt praesentium iure ipsa
                repudiandae. Odit, illo? Inventore illo ut molestiae veritatis
                eius incidunt necessitatibus id modi, a consectetur perferendis
                nam quas excepturi ipsa doloribus enim? Dicta, saepe alias
                labore impedit minima dolorum quidem quos! Quia itaque totam
                labore, at numquam sit neque similique modi praesentium error
                magni a laudantium, nesciunt, autem maxime exercitationem
                voluptatem magnam tempore sed expedita dolor? Dolorem delectus
                facere esse distinctio? Rerum eligendi odit voluptate nam neque
                ad natus, et autem facilis. Nisi, quisquam nemo, iure qui
                deserunt, at vero animi suscipit itaque facere est! Suscipit
                tempora tempore illum odit necessitatibus? Aliquam, veniam.
                Amet, sed. Nesciunt nulla vero voluptas temporibus provident cum
                nam, in atque debitis dignissimos obcaecati? Ratione maiores
                rerum praesentium veniam voluptates, voluptatibus possimus
                doloremque error maxime quos officia. Adipisci iusto dolor
                nesciunt voluptatem, nisi vero sit itaque reiciendis praesentium
                hic ullam fuga eum, non sed, minima id alias placeat tempore
                eveniet earum? Placeat necessitatibus doloribus vel animi
                quibusdam. Hic delectus sint, ratione autem, nemo necessitatibus
                eaque aliquam quisquam facere velit quaerat asperiores
                accusantium veniam molestias reprehenderit temporibus fugit
                optio quae saepe officia neque maiores cumque. Similique,
                molestiae fugit? Sed aut perferendis error quos eveniet
                recusandae quia deserunt earum reprehenderit facilis, ad quam
                dolores? Cumque, eum ratione! Nisi ab consequuntur libero est
                exercitationem doloremque ipsam, repudiandae veritatis officiis
                repellat. Vero, minima iste architecto aliquid voluptas
                veritatis perspiciatis pariatur illum alias explicabo quam eum,
                doloribus magnam necessitatibus nemo optio eaque. At voluptas
                vitae dolorem reprehenderit et tempora ipsa dolores soluta! Ad
                animi, obcaecati quasi qui a accusamus veniam praesentium ipsam
                ducimus aliquam quas? Pariatur placeat amet doloribus impedit,
                veritatis repellendus provident odit quis ea ad repudiandae
                minima ullam, maxime commodi? Adipisci alias vitae cumque odit.
                Assumenda sapiente quam inventore veritatis, ipsum aspernatur
                ducimus culpa ipsam cum maxime reprehenderit, hic deleniti
                corporis praesentium esse dolores ea in quos? Consequatur,
                deserunt quae. Odio hic, molestiae laboriosam in quia dolorum
                eum doloremque quos sapiente? Vitae nihil quam, harum dolorum
                molestias eveniet earum minus inventore sunt consequuntur,
                perspiciatis voluptatibus similique laboriosam tenetur ab
                quibusdam. Cupiditate, delectus. Eius qui nihil laudantium
                repellat! Dolorem numquam reiciendis perferendis dolore
                provident adipisci nesciunt similique harum iure officia neque
                ipsa corrupti labore quia, beatae maxime natus culpa ad modi.
                Ratione odio, accusantium nemo eos atque animi sapiente
                molestiae sunt distinctio quod? Quis expedita repudiandae eius
                vero, sequi autem excepturi illo modi voluptas quidem libero.
                Dignissimos, fugit. Harum, consectetur autem. Iure, maiores!
                Rerum asperiores nam ullam illum maxime nostrum optio eaque
                ratione quod sapiente molestiae unde corrupti sunt qui dolorem
                sint officiis esse, aliquid quos aliquam vel? Voluptas,
                similique ab. Ut quaerat illo eum labore provident eligendi
                omnis, voluptatibus officia aut, eos libero nemo, sapiente sit
                obcaecati delectus maxime corporis porro aperiam facilis.
                Aliquid, sequi non similique tempora ea blanditiis! Consequatur
                officia itaque dolore magnam tenetur alias omnis, sed eligendi
                hic ad porro amet consectetur, incidunt aliquid quidem ut ex
                nihil suscipit reprehenderit laudantium error eum! Accusantium
                ex deserunt nostrum. Voluptates consequuntur corrupti ab quasi
                repudiandae amet aperiam delectus velit rem fuga sunt a
                molestiae illum praesentium, enim qui est odit debitis fugiat
                nam officiis, quo quaerat magni voluptatem! Dolore. Sed ipsum
                accusamus asperiores ut, repellendus iste, repudiandae
                consequuntur placeat nesciunt temporibus illo velit voluptate
                ipsa. Eaque cum ab temporibus sed quo culpa vitae enim
                consequatur. Magni eos rerum dolor? Consequatur tempora iste
                earum ipsam ducimus sint sed laborum sit ullam recusandae nulla
                harum quibusdam enim veritatis voluptates, et porro
                exercitationem deserunt! Repellendus mollitia quaerat itaque
                ratione voluptate. Praesentium, repudiandae. Modi voluptatem
                blanditiis quidem, distinctio maxime repudiandae nulla nisi quae
                quis laudantium voluptates similique eligendi dignissimos
                adipisci tenetur aliquam sit nemo voluptatum porro commodi.
                Autem ipsa aspernatur doloremque officia sint? Sapiente
                voluptatum modi quasi explicabo earum autem tenetur deserunt
                libero quos ipsa sequi, quae aspernatur eligendi perferendis
                culpa omnis asperiores maiores, reiciendis dicta. Id deserunt
                labore tempore porro inventore mollitia? Quas nihil magnam porro
                quo assumenda consequuntur doloribus iure delectus ipsum
                laudantium eos expedita qui excepturi, recusandae veniam ducimus
                molestiae consectetur laboriosam aut dolor at alias. Quasi
                voluptatum ipsa ipsum! Deserunt adipisci nihil veritatis
                recusandae aperiam vel! Minus tenetur amet iure modi, earum
                officiis? Eum quas fugit expedita, similique ipsa aperiam fugiat
                inventore dolore, odit consectetur dolor? Porro, quisquam omnis.
                Autem numquam eum sequi nam mollitia perferendis cupiditate
                doloremque maiores molestiae sint nulla laboriosam cum quis non
                nesciunt, odio dolore, deleniti at asperiores illo nemo debitis
                quae voluptate! Molestias, sint. Mollitia reiciendis, corrupti
                deserunt et tempore delectus laudantium repellat eveniet culpa
                doloremque earum quis impedit accusamus autem itaque ratione.
                Est temporibus amet earum molestiae esse quo aliquid obcaecati
                numquam quam? Quis quaerat dolore reiciendis. Labore velit qui,
                ut ex maiores quaerat eos saepe delectus eaque minima cumque
                exercitationem! Voluptates vero doloremque fugiat sapiente
                ducimus molestias quae nisi quaerat sunt voluptate. Vitae
                aliquam, excepturi quos nihil aspernatur minus ea debitis
                beatae! Dolorum iste harum dolor fuga ipsum? Rem quibusdam
                beatae aliquid distinctio quisquam, laudantium eaque quae saepe
                dolor, optio id vero. Eveniet laudantium sunt ipsum libero
                molestiae dignissimos iste modi. Alias debitis doloribus error
                maxime veniam aliquam iste labore dolor nulla totam, inventore
                sapiente exercitationem minus suscipit quam dolore ratione id.
                Aut illum accusamus sunt provident mollitia inventore quod
                recusandae alias consequatur corporis facilis corrupti
                excepturi, saepe optio perferendis ex, cum perspiciatis eligendi
                nobis, facere sit? Veniam officiis similique aspernatur iure.
                Quibusdam doloribus totam, asperiores saepe voluptatibus modi
                culpa quos, tempore minima, quis dolorem optio ullam blanditiis
                consequuntur consequatur! Dignissimos rerum aliquam dolore
                voluptas quod qui unde sunt fugiat error cumque. Unde dolorum,
                quos quisquam tempore laborum aperiam a nam esse quod odit
                corporis amet ullam aliquam numquam sunt suscipit odio doloribus
                quaerat nihil enim, aliquid quidem aut. Quibusdam, quasi nobis.
                Saepe quo autem laborum atque! Perferendis veritatis ipsum harum
                delectus suscipit! Voluptate consequatur eum, totam quia odit
                eveniet, excepturi similique veritatis dolorum aliquam
                aspernatur. Deleniti assumenda dolorum delectus sunt magni.
                Asperiores quae, ratione voluptatibus molestias molestiae facere
                consequatur adipisci ullam. Reprehenderit aut alias modi amet
                porro libero quos ab praesentium quod vel! Maxime nam quis quas
                dignissimos sed. Minus, quibusdam. Nobis, ea soluta commodi
                reprehenderit velit enim laboriosam, accusamus saepe, debitis
                nisi voluptatum inventore corrupti suscipit adipisci molestiae
                vitae maxime eos recusandae! Expedita exercitationem culpa, vero
                sint odio non delectus. Eaque ut doloribus facilis, aperiam,
                mollitia at nesciunt earum commodi id qui architecto voluptate
                atque, maiores ipsa saepe ad voluptas quis rerum odit ducimus
                sapiente ullam est adipisci optio. Ex. Tenetur eveniet repellat,
                rerum non maxime hic animi eaque quod distinctio explicabo
                repellendus ipsa ratione officiis, fugiat laboriosam quam
                delectus architecto nihil vitae repudiandae earum minus culpa
                asperiores! Ex, ipsam. Voluptas harum labore optio at cum
                temporibus repellendus nostrum quis ut nam culpa excepturi,
                provident corrupti laborum ex nulla blanditiis cupiditate.
                Nihil, expedita obcaecati! Animi repudiandae vitae ut quis
                eveniet! Tempore laudantium odio, pariatur quos deserunt
                corrupti eligendi recusandae provident consequuntur repellendus
                consequatur quas, sapiente nam! Aspernatur tempore quibusdam eos
                ratione qui quaerat velit, eum at placeat aut sunt quia? Ex
                reiciendis ea sequi quas nostrum ut qui nemo labore vero illo
                quasi quo architecto, velit neque et molestias error atque saepe
                tempore doloremque minima suscipit nulla eos! Numquam,
                assumenda. Placeat saepe, tempora beatae eligendi consequatur
                iste aut a, illo laborum qui itaque error? Sequi quis sunt,
                deleniti consequuntur inventore suscipit dignissimos nostrum
                ipsa pariatur, ullam alias eligendi qui ab? Porro in dolores
                recusandae? Debitis, nesciunt? Similique quam rerum ullam, dolor
                explicabo velit ducimus porro! Quos, neque. Veniam dolor
                delectus dolorum, animi quae commodi maiores maxime deserunt
                saepe, sint praesentium? Necessitatibus repellendus praesentium
                officia, cum totam modi nam rem distinctio odit delectus
                molestiae fuga voluptatibus deleniti iusto ullam nihil
                voluptatem temporibus sed pariatur. Labore tempora animi dicta,
                ex sunt vitae? Officia aut error magnam, nemo atque incidunt
                aspernatur, nostrum ullam quas itaque quidem, culpa quis! Vero
                eaque possimus nihil nam nulla eveniet laudantium corporis animi
                magni ipsam, quidem optio quae! Ipsam adipisci quae accusantium
                dolorum consequatur doloribus deserunt dolores laboriosam
                reiciendis maiores libero ea repellendus voluptates illo
                tenetur, mollitia iste omnis placeat atque, excepturi quod.
                Doloremque accusamus quam recusandae molestias. Velit,
                repellendus porro earum ullam itaque minima obcaecati. Labore
                ipsum quaerat modi unde nisi laboriosam asperiores tenetur
                commodi dolores, nesciunt quidem porro minus deserunt, ipsa
                quasi molestias et, a expedita. Dolor eum doloribus unde
                veritatis enim commodi voluptatem corporis. Odio sit quas
                perspiciatis atque natus, alias, molestiae rerum impedit
                officiis repudiandae laudantium incidunt velit dignissimos
                quaerat sint, recusandae pariatur odit. Quo aspernatur excepturi
                sequi voluptate cum, dolorem soluta fugiat aliquid
                necessitatibus, molestias, nesciunt cumque impedit. Voluptatibus
                excepturi assumenda, quos enim cumque praesentium temporibus,
                culpa reprehenderit fugiat, quas rem maiores illo. Hic odit
                illum laudantium, accusantium explicabo blanditiis harum facere
                pariatur est velit fugiat consectetur sunt quia modi quibusdam
                commodi esse veritatis veniam maxime autem optio deserunt
                excepturi similique consequuntur? Maiores.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <SendMessage
          searchHeight={searchHeight}
          setSearchHeight={setSearchHeight}
        />
      </div>
    </div>
  );
}

export default Content;
