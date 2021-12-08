import React from "react";
import "./Paragraph.css";
import Card from "react-bootstrap/Card";

const Paragraph = () => {
  return (
    <>
      <Card className="info-card">
        <Card.Header id="header-background"><h4 className="info-card-title">COVID-19 and Asian Descrimination</h4></Card.Header>
        <Card.Body><Card.Title className="info-card-byline"><i>Written by : Clayton Richardson</i></Card.Title>
          <Card.Text>
          <p>Across the United States reports of anti-Asian racism have flooded into the press. A 64- year old grandmother was assaulted and robbed in San Jose. A 52-year-old Asian American woman was shot in the head with a flare gun in Oakland. These are just some of the horrific treatment that Asians have undergone since the rise of the global pandemic.</p>
          <p>According to the <a href="https://stopaapihate.org/stop-aapi-hate-national-report-2/"> Stop AAPI Hate </a>, a coalition that tracks and responds to incidents of hate and discrimination against Asian Americans and Pacific Islanders in the United States, there have been over 9,000 reported incidents. </p>  
          <p>This rise in discrimination can be potentially more stressful to the Asian community than the pandemic itself. Even those who have not been discriminated against like Augusta University’s <a href="https://www.augusta.edu/innovation/team.php">Arthur Takahashi</a> feel the effects of widespread discrimination. </p>
          <p><i>“During this wave of crimes against Asians even though I have not experienced that, just knowing that these cases are on the rise. That made me actually very anxious,”</i> says Takahashi. <i>“ For the first time in my life, I felt anxious and concerned about even walking outside of (my) house. I was concerned with my daughter’s safety.”</i> </p>
          <p>This fear is corroborated by data according to the <a href="https://www.pewresearch.org/social-trends/2020/07/01/many-black-and-asian-americans-say-they-have-experienced-discrimination-amid-the-covid-19-outbreak/"> Pew Research Center </a>, 12.6% of discrimination had been reported to occur to youths between the ages of 0-17 years of age. </p>
          <p>Pew Research Center also reports that Black and Asians were more likely to report adverse experiences due to their race or ethnicity since the coronavirus outbreak began. The sad fact is that many people of Asian descent who have lived in the United States for years have faced discrimination even before the pandemic. </p>
          <p>Citizens like Professor <a href="https://www.linkedin.com/in/sangsun-choi-026a979b/"> Sangsun Choi of Augusta University</a> have experienced discrimination in this country at an early age. </p>
          <p><i>“It’s rare for me to experience direct discrimination in my case, but a White stranger said ‘Chinky’ with a smile when I was a grad student in Milwaukee, Wisconsin,”</i> said Choi. <i>“It was a painful experience because it was the first time to be discriminated just because of my ethnic background.”</i></p>
          <p>The discrimination of Asian immigrants dates back to the 19th century during the <a href="https://www.history.com/news/chinese-immigration-page-act-women"> Page and Chinese Exclusion Act </a>. The Page Act of 1875 was the first restrictive federal immigration law, which effectively prohibited the entry of Chinese women. This was followed by the Chinese Exclusion Act seven years later. The act banned the immigration of Chinese men as well. </p>
          <p>These discriminations peaked during World War II, as Japanese Americans were forcibly incarcerated. It is because of these actions that Asian Americans and Pacific Islanders (AAPI) face the “perpetual foreigner” stereotype. This means that no matter how long they or their families have been in America, they are viewed as foreigners. <a href="https://www.apa.org/pubs/journals/cdp">(Armenta, B. E., et al., Cultural Diversity and Ethnic Minority Psychology, Vol. 19, No. 2, 2013)</a>. </p>
          <p>Many immigrants flee from a communist country for the safety of themselves and their families. Immigrants like <a href="https://www.facebook.com/truong.van.7982">Truong Van</a>, a Vietnamese refugee fled his home country when it became evident that he would be drafted into the communist army of the Vietnam government. Arriving in America he felt the struggles of being an AAPI immigrant in this country.</p>
          <p><i>“Even in Highschool it’s like you are always treated like an outsider,”</i> said Van. <i>“I guess that’s normal. We looked different and I didn’t speak the language good enough to be part of the group in many ways.”</i></p>
          <p><i>“I know sometimes people don’t like you but I find that not everyone is like that,” </i>said Van.<i> “There are certain people in our society that will hate you because of where you come from. I found good people along the way and have met more people who are friendly to me. I don’t think the majority of the American people are hateful.”</i></p>
          <p>Currently, the <a href="https://stopaapihate.org"> Stop AAPI Hate </a>. movement seeks to stand against the hate of Asian Americans and Pacific Islanders by standing together as a community. Their mission is to find restorative justice measures so that civil rights—for all vulnerable groups—receive the protection they deserve.</p>
          <p>They ask that if you witnessed or have experienced the discrimination of Asian Americans or Pacific Islanders to report the case to their website at <a href="https://stopaapihate.org"> stopaapihate.org.</a></p>
          <p><b>Education is the best way to combat all forms of racism and discrimination of all races in our country.</b> </p>
          <p>Mr. Van shared his wisdom by saying, <i>“When you broaden your mind and your horizons the barriers that separate us in terms of race and family background no longer matter.”</i></p>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </>
  );
};

export default Paragraph;
