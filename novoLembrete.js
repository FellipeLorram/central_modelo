export default {
    open() {
        const html = `  
                    <div class="novo_lembrete_windown_container">
                        <div class="novo_lembrete_windown">
                            <div class="novo_lembrete_windown_header">
                                <span class="material-icons">sticky_note_2</span>
                                <span class="novo_lembrete_windown_header--text">Novo lembrete</span>
                                <span class="material-icons novo_lembrete_windown_header--btn_close">close</span>
                            </div>
                            <div class="novo_lembrete_windown_body">
                                <form>
                                    <div class="input__container">
                                        <textarea class="text_area_field" name="lembrete" id="lembrete" cols="30" rows="5"></textarea>
                                    </div>
                                    <div class="lembretes_body_footer">
                                        <button id="salvar">Salvar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                `;

        const template = document.createElement("template");
        template.innerHTML = html;

        const windownContainer = template.content.querySelector(".novo_lembrete_windown_container");
        const btnClose = template.content.querySelector(".novo_lembrete_windown_header--btn_close");
        const btnSave = template.content.querySelector("#salvar");
        const lembreteField = template.content.querySelector('#lembrete');

        [windownContainer, btnClose].forEach(element => {
            element.addEventListener('click', e => {
                if (e.target == element) {
                    this._close(windownContainer);
                }
            });
        });

        btnSave.addEventListener('click', e => {

            if (!lembreteField.value) {
                e.preventDefault();
                lembreteField.classList.add('required_field');
            }
        });

        lembreteField.addEventListener('keydown', () => lembreteField.classList.remove('required_field'))

        document.body.appendChild(template.content);
        document.body.classList.add('stop-scrolling')
    },

    _close(windownContainer) {
        windownContainer.classList.add('confirm-close');

        windownContainer.addEventListener('animationend', () => {
            document.body.removeChild(windownContainer)
            document.body.classList.remove('stop-scrolling')
        })
    },


}
