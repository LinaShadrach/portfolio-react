import React from 'react';
import { Row, Col, CardPanel, Card, CardTitle } from 'react-materialize';
import { panel } from './../styles/styles.js';
import staffImg from './../data/img/staff-picture.jpg';
function Experience(){
  return (
    <div>
      <style jsx>{panel}</style>
      <div className='deep-purple lighten-4 panel' id='experiencespy'>
        <CardPanel>
          <Row>
            <Col s={12} m={7} l={7}>
              <p>
                I am the C#/.NET instructor at Epicodus, an intensive bootcamp for web development. I also teach an Introduction to Programming course and Javascript course. I am enthusiastic about the future of this field and am passionate about making sure that people from underrepresented demographics are a part of it.
              </p>
              <hr />
              <p>
                I attended class at Epicodus from October 2016 to March 2017. Epicodus utilizes a pair-programming structure. Each day for 8 hours we worked through the previous night's homework with a partner on a variety of basic web development skills. A central objective of the Epicodus curriculum is to teach students a set of highly adaptive technical and soft-skills coupled with an understanding of how to self-educate. I found that by working with a pair I was able to improve my skills at a quicker pace. I enjoyed learning from others, and when my pair was struggling with a topic I understood, it gave me a chance to solidify my knowledge by explaining it to someone else.
              </p>
              <hr />
              <p>
                When the position opened up for the C#/.NET track Instructor at Epicodus, I jumped at the opportunity. I knew that it would be a great way to continue my learning, and that I enjoyed contributing the positive and inclusive atmosphere that Epicodus cultivates.
              </p>
              <hr />                
              <p>
                Since taking the job, I have worked to learn at an even greater pace. I like to dive deep into topics. However, I believe that the best developers are flexible, so I focus on identifying patterns and themes that can be broadly abstracted and applied to other topics.
              </p>
              <hr />                
              <p>
                Check out the projects I've been working on below!
              </p>
              <p></p>
            </Col>
            <Col s={12} m={5} l={5}>
              <Card header={
                <CardTitle image= {staffImg}>
                  Staff Lunch
                </CardTitle>}>
                <p>
                  If your interested in learning how to code, check out <a href='epicodus.com'>Epicodus's</a> site.
                </p>
                <p>
                  Feel free to check out our <a href='learnhowtoprogram.com'>curriculum</a>- it's all posted online - no registration necessary!
                </p>
              </Card>
            </Col>
          </Row>
        </CardPanel>
      </div>
    </div>
  );
}

export default Experience;
