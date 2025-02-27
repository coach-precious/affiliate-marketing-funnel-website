export default function GeneralFooter() {
  return (
    <footer className="p-5 text-white text-center mt-12">
      <div className="flex items-center flex-col gap-4 w-full max-w-5xl mx-auto text-xl">
        <p>
          &copy;Copyright; Ogunleye Precious(Coach Precious){" "}
          {new Date().getFullYear()}.
        </p>
        <p>
          All images, texts and materials are protected by copyright law. All
          rights reserved. Unauthorized use prohibited. This Site Is Not A Part
          Of The YouTube, Google Or Facebook Website; Google Inc Or Facebook
          Inc. Additionally, This Site Is NOT Endorsed By YouTube, Google Or
          Facebook In Any Way. FACEBOOK Is A Trademark Of FACEBOOK, Inc. YOUTUBE
          Is A Trademark Of GOOGLE Inc.
        </p>
      </div>
    </footer>
  );
}
