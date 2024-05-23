About this fork: [IcySteam/proxy-chrome-extension](https://github.com/IcySteam/proxy-login-automator)
----------------------

This repository is a fork of [incu6us/proxy-chrome-extension](https://github.com/incu6us/proxy-chrome-extension)
to automate the use of random session IDs when connecting to MarsProxies servers.

It also contains [bug](https://github.com/incu6us/proxy-chrome-extension/commit/553d1921375fe05937b13f90d86f9b1fe2bc481b) fixes for the original repository.

proxy-chrome-extension
----------------------

This is the Google Chrome plugin to setup a proxy setting within two cases:
- first one - is a classic way to set a proxy with UI:
    ![UI option example](https://image.prntscr.com/image/B5QUAbVlT4Ota44nLe8p-w.png)

- dynamic setup with an URL parameters("proxyAddress", "proxyUsername", "proxyPassword"):
    ```
    https://www.hashemian.com/whoami/?proxyAddress=example.com:8080&proxyUsername=USERNAME&proxyPassword=p2SSW0RD
    ```
    In the case when page going to be loaded, proxy setting will be reset to defaults(or to manual settings if installed)
