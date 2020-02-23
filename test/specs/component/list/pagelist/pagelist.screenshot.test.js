/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const DefaultTestSetup = require('../../../../DefaultTestSetup');
const AEMPageUtilities = require('../../../../support/AEMPageUtilities');

const timeout = 20000;

describe(
  '/ (PageList Screenshot)',
  () => {
    let page;

    const { browserRenditions } = new DefaultTestSetup();
    const pagePath = '/content/swinburne-site-showcase/en/styleguide/components/page-list.html';

    beforeAll(async () => {
      const browser = await global.__CHROMIUMBROWSER__;
      console.log('browser isConnected():' + browser.isConnected());
      // // const browser = await global.__FIREFOXBROWSER__;
      const aemUtils = new AEMPageUtilities(browser, pagePath);

      page = await aemUtils.getPage();
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    test.only.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
      'Appearance of Page List with badge Icon in %s',
      async (label, rendition) => {
        console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
        const cssSelector = '#social-links';

        const resizedPage = await AEMPageUtilities.setViewportSize(page, rendition);
        const element = await resizedPage.$wait(cssSelector);

        console.log(await element.boundingBox());
        const image = await element.screenshot();
        expect(image).toMatchImageSnapshot();
        // expect(true).toBe(true);
      },
      timeout,
    );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Default in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_AIQY5ZRKO #pagelist_default_links';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image Tag Title and Action Promoted : default background in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_OXHFFXJJE #pagelist_36a';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image Tag Title and Action Promoted : default background with charcoal theme in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_1XHFFXJJE #pagelist_36b';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image Tag Title and Action Promoted : grey background in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_2XHFFXJJE #pagelist_36a';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image Tag Title and Action Promoted : yellow background in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_4XHFFXJJE #pagelist_36a';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image Tag Title and Action Promoted : grey background with charcoal theme in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_5XHFFXJJE #pagelist_36b';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Default : Horizontal links in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#reference_COQK8HAL9 #pagelist37';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Page details with Image, Title, Description and Action in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#contentblock_pagelist_pagedetails_badge_image_title_desc_action_pagelist';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Image, Title, Description and Action : Column in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_column';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Image, Title, Description and Action : Column 3 in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_column_3';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Image, Sub Title, Title, Description and Action in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#contentblock_pagelist_pagedetails_card_background_pagelist';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of 1 notification in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_notification_1';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of 2 notifications in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_notification_2';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of 3 notifications in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_notification_3';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List Testimonial Card with Online Media in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_testimonial_online_media';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List Testimonial Card with Online Media and Custom Image in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_testimonial_online_media_custom_image';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Title, Subtitle, Description and Action in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#card_title_subtitle_description_action';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List Testimonial Card with Image in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_testimonial_image';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List Testimonial Card with Subtitle in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_testimonial_text_only';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List Testimonial Card without Subtitle in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_testimonial_text_only_without_subtitle';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Clickable cards with icon and title in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_pagedetails_clickable_card_icon_title';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of Page List with badge Card with Title, Subtitle, Description and Action in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#card_title_subtitle_description_action';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );

    // test.each(browserRenditions.map((data) => [data[0].label, data[0]]))(
    //   'Appearance of cards with action default with arrow in %s',
    //   async (label, rendition) => {
    //     console.log('label:%s ,height:%i ,width:%i', label, rendition.height, rendition.width);
    //     const cssSelector = '#pagelist_action_default_with_arrow';

    //     page = await AEMPageUtilities.setViewportSize(page, rendition);
    //     const element = await page.$(cssSelector);
    //     const image = await element.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   },
    //   timeout,
    // );
  },
  timeout,
);
