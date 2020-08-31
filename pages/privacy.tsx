import { Image } from "components/Image";
import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { FunctionComponent } from "react";
import Container from "../components/container";
import Post from "../types/post";
import Footer from "components/footer";
import { NavItem } from "components/NavItem";

const Imprint = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black-500 text-white font-sans">
      <div>
        <nav className="h-16 flex justify-end items-start px-8 py-4">
          <NavItem href="/">Zurück zur Startseite</NavItem>
        </nav>
        <main>
          <Head>
            <title>Firat Özcan | Datenschutz</title>
            <link rel="stylesheet" href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css" />
          </Head>
          <div className="bg-black-300">
            <Container>
              <section className="text-white pt-40 prose prose-sm md:prose-lg lg:prose-xl max-w-4xl">
                <div>
                  <h1>Datenschutzerklärung</h1>
                  <h2>1. Datenschutz auf einen Blick</h2>
                  <h3>Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
                    diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.
                  </p>
                  <h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                    Impressum dieser Website entnehmen.
                  </p>
                  <h4>Wie erfassen wir Ihre Daten?</h4>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln,
                    die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                    Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                    dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                  <h4>Wofür nutzen wir Ihre Daten?</h4>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können
                    zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
                    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für
                    die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                    Aufsichtsbehörde zu.
                  </p>
                  <p>
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen
                    Adresse an uns wenden.
                  </p>
                  <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
                  <h3>Externes Hosting</h3>
                  <p>
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser
                    Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
                    die über eine Website generiert werden, handeln.
                  </p>
                  <p>
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden
                    (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
                    Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p>
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist
                    und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                  <p>Wir setzen folgenden Hoster ein:</p>
                  <p>
                    Vercel Inc.
                    <br />
                    340 S Lemon Ave #4133
                    <br />
                    Walnut, CA 91789
                    <br />
                    privacy@vercel.com
                  </p>
                  <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3>Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen
                    Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
                    mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir
                    erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                    aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                  <h3>Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>
                    Firat Özcan
                    <br />
                    Heinrichstraße 9<br />
                    38259 Salzgitter
                  </p>
                  <p>
                    Telefon: +49 (0) 162 / 891 7452
                    <br />
                    E-Mail: firatoezcan@gmail.com
                  </p>
                  <p>
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke
                    und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. ä.) entscheidet.
                  </p>
                  <h3>Speicherdauer</h3>
                  <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
                    personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                    Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                    wir keinen anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer-
                    oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                  <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
                    vom Widerruf unberührt.
                  </p>
                  <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                  <p>
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT,
                    AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
                    RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLäRUNG. WENN SIE WIDERSPRUCH
                    EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
                    SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
                    DSGVO).
                  </p>
                  <p>
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                    WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN;
                    DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
                    WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH
                    ART. 21 ABS. 2 DSGVO).
                  </p>
                  <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                    insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                    Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
                    Rechtsbehelfe.
                  </p>
                  <h3>Recht auf Datenübertragbarkeit</h3>
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
                    verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie
                    die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                    machbar ist.
                  </p>
                  <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
                    Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                    verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
                    und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p>
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
                    mitgelesen werden.
                  </p>
                  <h3>Auskunft, Löschung und Berichtigung</h3>
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                    Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                    können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                  <h3>Recht auf Einschränkung der Verarbeitung</h3>
                  <p>
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie
                    sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung
                    besteht in folgenden Fällen:
                  </p>
                  <ul>
                    <li>
                      Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel
                      Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </li>
                    <li>
                      Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
                      Einschränkung der Datenverarbeitung verlangen.
                    </li>
                    <li>
                      Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                      Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                    <li>
                      Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
                      Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                      Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                  </ul>
                  <p>
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                    abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
                    Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen
                    Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                  </p>
                  <h2>4. Datenerfassung auf dieser Website</h2>
                  <h3>Kontaktformular</h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von
                    Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                    Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                    übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                    gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                    abgefragt wurde.
                  </p>
                  <p>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                    Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener
                    Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                  <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p>
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
                    personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                    Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
                    übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                    gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                    abgefragt wurde.
                  </p>
                  <p>
                    Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                    Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener
                    Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
                    bleiben unberührt.
                  </p>
                  <p>
                    Quelle:{" "}
                    <a href="https://www.e-recht24.de" rel="noreferrer noopener">
                      https://www.e-recht24.de
                    </a>
                  </p>
                </div>
              </section>
            </Container>
            <svg viewBox="0 0 1695 57" preserveAspectRatio="none" className="fill-current text-black-500 bg-black-300">
              <path
                d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
