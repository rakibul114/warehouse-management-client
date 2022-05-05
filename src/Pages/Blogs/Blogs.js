import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-5">OUR BLOGS</h1>
        <div>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What are the Difference between Node.JS and Javascript?
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <p>
                    <b>NodeJS</b> : NodeJS is a cross-platform and opensource
                    Javascript runtime environment that allows the javascript to
                    be run on the server-side. Nodejs allows Javascript code to
                    run outside the browser. Nodejs comes with a lot of modules
                    and mostly used in web development.{" "}
                  </p>
                  <p>
                    <b>JavaScript</b> : Javascript is a Scripting language. It
                    is mostly abbreviated as JS. It can be said that Javascript
                    is the updated version of the ECMA script. Javascript is a
                    high-level programming language that uses the concept of
                    Oops but it is based on prototype inheritance.
                  </p>
                </div>
                <h5>Difference between Nodejs and JavaScript : </h5>
                <Table striped>
                  <thead>
                    <tr>
                      <th>JavaScript</th>
                      <th>Node JS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Javascript is a programming language that is used for
                        writing scripts on the website.{" "}
                      </td>
                      <td>NodeJS is a Javascript runtime environment.</td>
                    </tr>
                    <tr>
                      <td>Javascript can only be run in the browsers.</td>
                      <td>
                        We can run Javascript outside the browser with the help
                        of NodeJS.
                      </td>
                    </tr>
                    <tr>
                      <td>It is basically used on the client-side.</td>
                      <td>It is mostly used on the server-side.</td>
                    </tr>
                    <tr>
                      <td>
                        Javascript is capable enough to add HTML and play with
                        the DOM.{" "}
                      </td>
                      <td>Nodejs does not have capability to add HTML tags.</td>
                    </tr>
                    <tr>
                      <td>
                        Javascript can run in any browser engine as like JS core
                        in safari and Spidermonkey in Firefox.{" "}
                      </td>
                      <td>
                        V8 is the Javascript engine inside of node.js that
                        parses and runs Javascript.{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Javascript is used in frontend development.</td>
                      <td>Nodejs is used in server-side development.</td>
                    </tr>
                    <tr>
                      <td>
                        Some of the javascript frameworks are RamdaJS, TypedJS,
                        etc.{" "}
                      </td>
                      <td>
                        Some of the Nodejs modules are Lodash, express etc.
                        These modules are to be imported from npm.{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        It is the upgraded version of ECMA script that uses
                        Chrome’s V8 engine written in C++.{" "}
                      </td>
                      <td>Nodejs is written in C, C++ and Javascript.</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                When should you use Node JS and when should you use MongoDB?
              </Accordion.Header>
              <Accordion.Body>
                <b>What is Node JS?</b>
                <p>
                  Node.js is an open-source, cross-platform, back-end JavaScript
                  runtime environment that runs on the V8 engine and executes
                  JavaScript code outside a web browser. Node.js lets developers
                  use JavaScript to write command line tools and for server-side
                  scripting—running scripts server-side to produce dynamic web
                  page content before the page is sent to the user's web
                  browser. Consequently, Node.js represents a "JavaScript
                  everywhere" paradigm, unifying web-application development
                  around a single programming language, rather than different
                  languages for server-side and client-side scripts.
                </p>
                <b>Uses of Node JS</b> :
                <ul>
                  <li>
                    <b>Real-time applications</b>. As we have found that Node.js
                    can ensure great speed and performance, one of the textbook
                    Node.js use cases is real-time messaging, or chatting. The
                    environment can support heavy traffic of multiple short
                    messages, or chatrooms when messages are displayed to many
                    users at the same time.
                  </li>
                  <li>
                    <b>IoT applications</b>. The synergy of Node.js IoT is the
                    best possible for implementing IoT development projects.
                    First, Node js is fast and powerful, and therefore capable
                    of handling large data flows. Second, you can easily
                    integrate Node.js with IoT protocols (the integration with
                    MQTT and WebSockets can be a good example). And finally, the
                    Node Package Manager briefly described above, has a
                    significant number of helpful IoT modules that help
                    implement the most ambitious IoT projects.{" "}
                  </li>
                  <li>
                    <b>Collaborative tools</b>. This Node.js use case example is
                    also related to its ability to process real-time flows. You
                    should have heard of Trello, a project management
                    application that is rather popular with software development
                    companies. Well, Trello was developed on the basis of
                    Node.js and benefited from its event-driven, non-blocking
                    model. Node.js is great for applications requiring immediate
                    updates, such as various collaboration tools and online
                    documentation suites.
                  </li>
                  <li>
                    <b>Data streaming applications</b>. The term “streaming”
                    means exactly that – sending large amounts of data in
                    smaller packages instead of a single batch. This ability is
                    especially critical for audio or video streaming
                    applications. Node.js is perfectly suited for this task with
                    built-in modules supporting data streaming and allowing to
                    create both readable and writable data streams. If we add
                    that Netflix, a global media service provider, uses Node.js,
                    you may get the idea of how powerful this environment is.
                  </li>
                  <li>
                    <b>Applications relying on scalability</b>. The superb
                    scalability supported by Node.js answers the “why Node.js”
                    question for apps required to withstand high peak loads.
                    This is the reason why Uber chose Node.js to develop its
                    app. The global taxi network is always growing and expanding
                    its presence; at the same time, the nature of the taxi
                    business causes high demand peaks during holidays. Node.js
                    handles these challenges quite well.
                  </li>
                </ul>
                <b>What is MongoDB?</b>
                <p>
                  MongoDB is a source-available cross-platform document-oriented
                  database program. Classified as a NoSQL database program,
                  MongoDB uses JSON-like documents with optional schemas.
                </p>
                <b>Uses of MongoDB :</b>
                <ul>
                  <li>
                    <b>Integrating large amounts of diverse data:</b> If you are
                    bringing together tens or hundreds of data sources, the
                    flexibility and power of the document model can create a
                    single unified view in ways that other databases cannot.
                    MongoDB has succeeded in bringing such projects to life when
                    approaches using other databases have failed.
                  </li>
                  <li>
                    <b>Describing complex data structures that evolve:</b>{" "}
                    Document databases allow embedding of documents to describe
                    nested structures and easily tolerate variations in data in
                    generations of documents. Specialized data formats like
                    geospatial are efficiently supported. This results in a
                    resilient repository that doesn’t break or need to be
                    redesigned every time something changes.
                  </li>
                  <li>
                    <b>Delivering data in high-performance applications:</b>{" "}
                    MongoDB’s scale-out architecture can support huge numbers of
                    transactions on humongous databases. Unlike other databases
                    that either cannot support such scale or can only do so with
                    massive amounts of engineering and additional components,
                    MongoDB has a clear path to scalability because of the way
                    it was designed. MongoDB is scalable out of the box.
                  </li>
                  <li>
                    <b>Supporting hybrid and multi-cloud applications:</b>{" "}
                    MongoDB can be deployed and run on a desktop, a massive
                    cluster of computers in a data center, or in a public cloud,
                    either as installed software or through MongoDB Atlas, a
                    database-as-a-service product. If you have applications that
                    need to run wherever they make sense, MongoDB supports any
                    configuration now and in the future.
                  </li>
                  <li>
                    <b>Supporting agile development and collaboration:</b>{" "}
                    Document databases put developers in charge of the data.
                    Data becomes like code that is friendly to developers. This
                    is far different from making developers use a strange system
                    that requires a specialist. Document databases also allow
                    the evolution of the structure of the data as needs are
                    better understood. Collaboration and governance can allow
                    one team to control one part of a document and another team
                    to control another part.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What are the Differences between SQL and NoSQL databases?
              </Accordion.Header>
              <Accordion.Body>
                <h5>What is SQL?</h5>
                <p>
                  SQL is a domain-specific language used in programming and
                  designed for managing data held in a relational database
                  management system (RDBMS), or for stream processing in a
                  relational data stream management system (RDSMS). It is
                  particularly useful in handling structured data, i.e. data
                  incorporating relations among entities and variables. SQL
                  offers two main advantages over older read–write APIs such as
                  ISAM or VSAM. Firstly, it introduced the concept of accessing
                  many records with one single command. Secondly, it eliminates
                  the need to specify how to reach a record, e.g. with or
                  without an index.
                </p>
                <h5>What is NoSQL?</h5>
                <p>
                  A NoSQL database provides a mechanism for storage and
                  retrieval of data that is modeled in means other than the
                  tabular relations used in relational databases. Such databases
                  have existed since the late 1960s, but the name "NoSQL" was
                  only coined in the early 21st century, triggered by the needs
                  of Web 2.0 companies. NoSQL databases are increasingly used in
                  big data and real-time web applications. NoSQL systems are
                  also sometimes called not only SQL to emphasize that they may
                  support SQL-like query languages or sit alongside SQL
                  databases in polyglot-persistent architectures.
                </p>
                <h5>Difference between SQL and NoSQL:</h5>
                <div>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Relational Database Management System (RDBMS)</td>
                        <td>Non-relational or distributed database system</td>
                      </tr>
                      <tr>
                        <td>
                          These databases have fixed or static or predefined
                          schema
                        </td>
                        <td>They have dynamic schema</td>
                      </tr>
                      <tr>
                        <td>
                          These databases are not suited for hierarchical data
                          storage
                        </td>
                        <td>
                          These databases are best suited for hierarchical data
                          storage
                        </td>
                      </tr>
                      <tr>
                        <td>
                          These databases are best suited for complex queries
                        </td>
                        <td>
                          These databases are not so good for complex queries
                        </td>
                      </tr>
                      <tr>
                        <td>Vertically Scalable</td>
                        <td>Horizontally scalable</td>
                      </tr>
                      <tr>
                        <td>Follows ACID property</td>
                        <td>
                          Follows CAP(consistency, availability, partition
                          tolerance)
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What is the purpose of jwt and how does it work?
              </Accordion.Header>
              <Accordion.Body>
                <h5>What is JWT?</h5>
                <p>
                  JWT, or JSON Web Token, is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued.
                </p>
                <h5>How does JWT work</h5>
                <p>
                  JWTs differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted.
                </p>
                <p>
                  A JWT is a string made up of three parts, separated by dots
                  (.), and serialized using base64. In the most common
                  serialization format, compact serialization, the JWT looks
                  something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will
                  get two JSON strings:
                  <ol>
                    <li>The header and the payload.</li>
                    <li>The signature.</li>
                  </ol>
                </p>
                <p>
                  The JOSE (JSON Object Signing and Encryption) header contains
                  the type of token — JWT in this case — and the signing
                  algorithm.{" "}
                </p>
                <p>
                  The payload contains the claims. This is displayed as a JSON
                  string, usually containing no more than a dozen fields to keep
                  the JWT compact. This information is typically used by the
                  server to verify that the user has permission to perform the
                  action they are requesting
                </p>
                <p>
                  There are no mandatory claims for a JWT, but overlaying
                  standards may make claims mandatory. For example, when using
                  JWT as bearer access token under OAuth2.0, iss, sub, aud, and
                  exp must be present. Some are more common than others.{" "}
                </p>
                <p>
                  The signature ensures that the token hasn’t been altered. The
                  party that creates the JWT signs the header and payload with a
                  secret that is known to both the issuer and receiver, or with
                  a private key known only to the sender. When the token is
                  used, the receiving party verifies that the header and payload
                  match the signature.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
};

export default Blogs;