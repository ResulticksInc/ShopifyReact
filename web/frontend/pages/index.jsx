import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";
import { resulImage } from "../assets";

import CodeEditor from '@uiw/react-textarea-code-editor';


import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TitleBar title={"Resul Shopify"} primaryAction={null} />
      <div style={{ width: "100%", height: "100%", padding: 25 }}>
        {/* Image Container */}

        <div style={{ margin: "auto", width: "25%", marginTop: 10 }}>
          <Image
            source={resulImage}
            alt={t("HomePage.trophyAltText")}
            width={120}
            height={120}
          />

        </div>
        <br />

        {/* Install Container */}

        <div>
          <Text as="h2" variant="headingMd">
            {"Installing the Web SDK"}
          </Text>
          <br />
          <p>
            To install the Web SDK, add the code snippet given below into the web domain HTML at the
            codebase body. Example:
          </p>
          <br />
          <CodeEditor
            value={`
            <script fcm_service_path="<fcm_path>" src="<sdk path>" defer="defer"></script>
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
        {/* User register */}
        <div>
          <Text as="h2" variant="headingMd">
            {"User register"}
          </Text>
          <br />
          <p>
            The function sends a push notification every time the authorization token is received/refreshed.
          </p>
          <br />
          <Text as="h6" variant="headingMd">
            {"Method - userRegister"}
          </Text>
          <br />
          <p>
            `Use the method ‘userRegister’ for SDK user registration. In the JavaScript file related to the login page, paste the ‘userRegister’ method and calls the method after the user login function is successful.
          </p>
          <CodeEditor
            value={`
            var userDetails{
                      "uniqueId":"",   //mandatory uniqueId,
                      "email":"",
                      "phone":"",
                      "name":"",
                      "profileUrl":"",
                      "age":"",
                      "dateOfBirth":"",
                      "gender":""
              }
              window.ReWebSDK.userRegister(userDetails);
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
          <p>
            Based on the above code snippet, the ‘uniqueId’ can be customized, and the ‘email ID’ and ‘mobile ID’ can also be customized.
          </p>
          <br />
          <p>Enable the following parameters as mandatory at the code level:</p>
          <br />
          <p>The above parameter <mark>uniqueId {"&&"} token </mark></p>
          <br />
          <storng>Method – userLogout</storng>
          <br />
          <p>Use the method userLogout to unsubscribe the FCM tokenfor a user from receiving a web push notification</p>
          <br />
          <CodeEditor
            value={`
              window.ReWebSDK.userLogout()
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>

        {/* Custom event */}

        <div>
          <Text as="h2" variant="headingMd">
            {"Custom event"}
          </Text>
          <br />
          <p>
            The SDK provides a feature to set-up events related to the brand as the trigger point for communications. For example, consider a user of a bank. If the user visits an app page, reads about the personal loan, and then moves to a different page without filling in the form to see if he is eligible for a loan.Consider setting-up this user behavior as a custom event and use it as a trigger to retarget the specific user withpush notification (In-app message) instantly.
          </p>
          <br />
          <p>
            Track the following two types of events using the listed two methods:
          </p>
          <br />
          <p>
            Event/ event name
          </p>
          <br />
          <p>
            Product detail
          </p>
          <br />
          <Text as="h3" variant="headingMd">
            {"Method - Custom event"}
          </Text>
          <br />
          <p>
            Use the method customEventto enable custom event tracking.
          </p>
          <CodeEditor
            value={`
            // Event type 1
            var resEvent1 = {
                eventName: 'add to cart'
            };
            window.ReWebSDK.customEvent(resEvent1);

            // Event type 2
            var resEvent2 = {
                eventName: 'Product Purchased',
                productId: 'P234234',
                productName: 'Mobile Phone'
            };
            window.ReWebSDK.customEvent(resEvent2);
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />

        </div>

        {/* Form data capture */}

        <div>
          <Text as="h2" variant="headingMd">
            {"Client form data capture"}
          </Text>
          <br />
          <p>
            Form data capture extracts information from an electronic form and converts it into data readable in electronic form. Tracks a brand's user behavior by data capturing refers to collecting related information through electronic documents such as any form. The brand tracks the user behavior like the 'Signup form' and the 'Application form'. At the backend, SmartDX provides support to track these forms by enabling the SDK package.
          </p>
          <br />
          <Text as="h3" variant="headingMd">
            {"Method – formCapture"}
          </Text>
          <br />
          <p>
            Use the method formDataCaptureto collect the brands user details without any SmartDX web
            form.
          </p>
          <CodeEditor
            value={`
            var formDetails= {
              "formId":"",
              "email":"",
              "phone": "",
              "name":"",
              "profileUrl":"",
              "age" : "",
              "dateOfBirth" : ""
         }
           window.ReWebSDK.formDataCapture(formDetails);
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />

          <p>Note Generate the fields to be captured with <mark>formId</mark> in the applications form creation page. The previously identified data fields in the form are used and validated using the above method.</p>
        </div>

        {/* Conversion tracking */}

        <div>
          <Text as="h2" variant="headingMd">
            {"Conversion tracking"}
          </Text>
          <br />
          <p>
            Tracks if the contact completes the call to action associated with the campaign communications
            for different communication channels. For example, purchase.
          </p>
          <br />
          <Text as="h3" variant="headingMd">
            {"Method – conversionTracking"}
          </Text>
          <br />
          <p>
            Use the method conversionTracking for campaign conversion.
          </p>
          <CodeEditor
            value={`
              window.ReWebSDK.conversionTracking();
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>

        {/* Location update */}

        <div>
          <Text as="h2" variant="headingMd">
            {"Location update"}
          </Text>
          <br />
          <p>
            The application enables tracking users' locations using GPS on their devices if they have permitted to use the device location. Then, use near field communications (NFC) as a trigger to target the user with contextual communication based on the proximity to one of the NFC beacons.
          </p>
          <br />
          <Text as="h3" variant="headingMd">
            {"Method – locationUpdate"}
          </Text>
          <br />
          <p>
            Use the method locationUpdate for updating the user location details.
          </p>
          <CodeEditor
            value={`
            var location = {
              latitude: 13.067439,
              longitude: 80.237617 
            }
            window.ReWebSDK.userLocation(location);
            `}
            language="ruby"
            placeholder="Please enter JS code."
            onChange={(evn) => { }}
            padding={15}
            style={{
              fontSize: 12,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>

        {/* Button container */}






      </div>
    </div>
  )



  return (
    <Page narrowWidth>
      <TitleBar title={"Resul Shopify"} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <div style={{ margin: "auto", width: "25%" }}>
                    <Image
                      source={resulImage}
                      alt={t("HomePage.trophyAltText")}
                      width={120}
                    />

                  </div>
                  <div style={{ margin: "auto", width: "25%" }}>
                    <Text as="h2" variant="headingMd">
                      {"Welcome to Resul shopify"}
                    </Text>
                  </div>

                  <div>
                    {/* Install Web SDK */}
                    <div>
                      <Text as="h2" variant="headingMd">
                        {"Installing the Web SDK"}
                      </Text>
                      <br />
                      <p>
                        To install the Web SDK, add the code snippet given below into the web domain HTML at the
                        codebase body. Example:
                      </p>
                      <br />
                      <p style={{ height: 40, backgroundColor: '#d4d4d4' }}>
                        <code>
                          <pre>
                            &lt;script fcm_service_path="fcm" sdk="your sdk path" defer="true" /&gt;
                          </pre>
                        </code>
                      </p>
                    </div>

                    {/* User register */}

                    <div>
                      <Text as="h2" variant="headingMd">
                        {"User register"}
                      </Text>
                      <br />
                      <p>
                        The function sends a push notification every time the authorization token is received/refreshed.
                      </p>
                      <br />
                      <Text as="h3" variant="headingMd">
                        {"Method - userRegister"}
                      </Text>
                      <br />
                      <p>
                        `Use the method ‘userRegister’ for SDK user registration. In the JavaScript file related to the login page, paste the ‘userRegister’ method and calls the method after the user login function is successful.
                      </p>
                      <p style={{ height: 40, backgroundColor: '#d4d4d4' }}>
                        user register code
                      </p>
                      <p>
                        Based on the above code snippet, the ‘uniqueId’ can be customized, and the ‘email ID’ and ‘mobile ID’ can also be customized.
                      </p>
                      <br />
                      <p>Enable the following parameters as mandatory at the code level:</p>
                      <br />
                      <p>The above parameter <mark>uniqueId {"&&"} token </mark></p>
                      <br />
                      <storng>Method – userLogout</storng>
                      <br />
                      <p>Use the method userLogout to unsubscribe the FCM tokenfor a user from receiving a web push notification</p>
                      <br />
                      <p style={{ height: 40, backgroundColor: '#d4d4d4' }}>User Logout method code</p>
                    </div>


                    {/* Custom event */}

                    <div>
                      <Text as="h2" variant="headingMd">
                        {"Custom event"}
                      </Text>
                      <br />
                      <p>
                        The SDK provides a feature to set-up events related to the brand as the trigger point for communications. For example, consider a user of a bank. If the user visits an app page, reads about the personal loan, and then moves to a different page without filling in the form to see if he is eligible for a loan.Consider setting-up this user behavior as a custom event and use it as a trigger to retarget the specific user withpush notification (In-app message) instantly.
                      </p>
                      <br />
                      <p>
                        Track the following two types of events using the listed two methods:
                      </p>
                      <br />
                      <p>
                        Event/ event name
                      </p>
                      <br />
                      <p>
                        Product detail
                      </p>
                      <br />
                      <Text as="h3" variant="headingMd">
                        {"Method - Custom event"}
                      </Text>
                      <br />
                      <p>
                        Use the method customEventto enable custom event tracking.
                      </p>
                      <p style={{ height: 40, backgroundColor: '#d4d4d4' }}>
                        custom event code
                      </p>
                    </div>

                    {/* Form data capture */}

                    {/* <div>
                      <Text as="h2" variant="headingMd">
                        {"Client form data capture"}
                      </Text>
                      <br />
                      <p>
                        Form data capture extracts information from an electronic form and converts it into data readable in electronic form. Tracks a brand's user behavior by data capturing refers to collecting related information through electronic documents such as any form. The brand tracks the user behavior like the 'Signup form' and the 'Application form'. At the backend, SmartDX provides support to track these forms by enabling the SDK package.
                      </p>
                      <br />
                      <Text as="h3" variant="headingMd">
                        {"Method – formCapture"}
                      </Text>
                      <br />
                      <p>
                      Use the method formDataCaptureto collect the brands user details without any SmartDX web
form.
                      </p>
                      <p style={{ height: 40, backgroundColor: '#d4d4d4' }}>
                          form data capture code
                      </p>
                      <p>Note Generate the fields to be captured with <mark>formId</mark> in the applications form creation page. The previously identified data fields in the form are used and validated using the above method.</p>
                    </div> */}


                  </div>






                  {/* <p>{t("HomePage.startPopulatingYourApp")}</p> */}
                  {/* <p>
                    <Trans
                      i18nKey="HomePage.learnMore"
                      components={{
                        ShopifyTutorialLink: (
                          <Link
                            url="https://shopify.dev/apps/getting-started/add-functionality"
                            external
                          />
                        ),
                      }}
                    />
                  </p> */}
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                {/* <div style={{ padding: "0 20px" }}>
                  <Image
                    source={resulImage}
                    alt={t("HomePage.trophyAltText")}
                    width={120}
                  />
                </div> */}
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        {/* <Layout.Section>
          <ProductsCard />
        </Layout.Section> */}
      </Layout>
    </Page>
  );
}
