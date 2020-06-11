<template>
    <div class="header">
      <div class="content">
        <aside>
          <div class="profile">
            <div>
              <strong>Guilherme Henrique</strong>

              <a href="#">Meu perfil</a>
            </div>

            <a href="index.html">Sair</a>
          </div>
        </aside>
      </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  .header {
    background: #F6F7F9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    min-height: 60px;
    padding: 0px 20px;
    z-index: 1;
    box-shadow: 0px 15px 10px -15px #111;
  }

  .header .content {
    height: 100%;
    max-width: 1200px;
  }

  .header nav {
    display: flex;
    align-items: center;
  }

  .header aside {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header aside .profile {
    display: flex;
  }

  .header aside .profile div {
    text-align: right;
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid #999;
  }

  .header aside .profile div strong {
    display: block;
    color: #333;
  }

  .header aside .profile div a {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #999;
  }

  .header aside .profile div + a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    border-radius: 4px;
    text-align: center;
    background: #fff;
    border: 1px solid #2051B9;
    color: #2051B9;
    font-weight: bold;
    position: relative;
    transition: 1s all ease;
    z-index: 0;
    overflow: hidden;
  }

  .header aside .profile div + a:hover {
    color: #fff;
  }

  .header aside .profile div + a::before {
    content: "";
    width: 110%;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #2051B9;
    z-index: -1;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.6s ease;
  }

  .header aside .profile div + a:hover::before {
    height: 200%;
  }
</style>
