export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'd45d6b6e-4723-11e7-8519-9f94ee97d996',

  // canonical URL of the published page
  // https://ig.ft.com/sites/federal-reserve-march-meeting-2017 get filled in by the ./configure script
  url: 'https://ig.ft.com/trump-paris-agreement-speech-annotator/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-06-01T23:52:16.000Z'),

  headline: 'Donald Trump takes the US out of the Paris climate deal — annotated',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Mr Trump’s full speech with FT correspondents’ notes and comments',

  topic: {
    name: 'Donald Trump',
    url: 'https://www.ft.com/donald-trump',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Pilita Clark', url: 'https://www.ft.com/topics/people/Pilita_Clark' },
    { name: 'Lauren Leatherby', url: 'https://www.ft.com/lauren-leatherby' },
  ],

  // Appears in the HTML <title>
  title: 'Trump transcript on Paris climate deal exit - annotated',

  // meta data
  description: 'Analysis of the president\'s Rose Garden speech',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod-us.s3.amazonaws.com%2Fe61fde10-4703-11e7-8d27-59b4dd6296b8?source=next&fit=scale-down&width=1200',
  socialHeadline: 'Trump transcript on Paris climate deal exit - annotated',
  socialSummary: 'Analysis of the president\'s Rose Garden speech',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod-us.s3.amazonaws.com%2Fe61fde10-4703-11e7-8d27-59b4dd6296b8?source=next&fit=scale-down&width=1800',
  twitterCreator: '@ft',
  // tweetText:  '',
  //twitterHeadline:  'Trump\'s #Inauguration speech transcript, annotated',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod-us.s3.amazonaws.com%2Fe61fde10-4703-11e7-8d27-59b4dd6296b8?source=next&fit=scale-down&width=1800',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
