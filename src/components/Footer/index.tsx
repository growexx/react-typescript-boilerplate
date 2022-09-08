import Wrapper from "./Wrapper";

function Footer() {
  return (
    <Wrapper>
      <section>
        &copy; ${new Date().getFullYear()} React Boilerplate
        <section>
          Get started with your next react application in seconds.
        </section>
      </section>
      <section></section>
    </Wrapper>
  );
}

export default Footer;
