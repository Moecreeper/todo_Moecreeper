    const para = document.querySelector('p');
    para.addEventListener('click', updateName);
    function updateName() {
      const name = prompt('输入一个新的名字：');
      para.textContent = '玩家1：' + name;
    }
/*     如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async。
如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，
将关联的脚本按所需顺序置于 HTML 中。 */