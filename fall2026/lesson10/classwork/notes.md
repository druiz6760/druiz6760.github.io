  <button
    class="menu-toggle"
    id="menuToggle"
    type="button"
    aria-label="Open navigation menu"
    aria-controls="primaryNav"
    aria-expanded="false"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <ul class="nav-list" id="primaryNav">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#notes">Notes</a></li>

    <li class="has-dropdown">
      <button
        class="dropdown-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="classesMenu"
      >
        Classes ▾
      </button>

      <ul class="dropdown-menu" id="classesMenu" hidden>
        <li><a href="#classes">Web Development</a></li>
        <li class="has-submenu">
          <button
            class="submenu-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="topicsMenu"
          >
            Course topics ▸
          </button>
          <ul class="submenu" id="topicsMenu" hidden>
            <li><a href="#classes">HTML &amp; CSS</a></li>
            <li><a href="#classes">JavaScript</a></li>
            <li><a href="#classes">Responsive design</a></li>
          </ul>
        </li>
      </ul>
    </li>

    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<div class="hero">
  <p class="eyebrow">Learn · Build · Share</p>
  <h1>Turn curiosity into code.</h1>
  <p>
    Explore web development, create projects, and build the skills to bring
    your ideas to life.
  </p>
  <a class="button" href="#classes">Explore the classes</a>
</div>