export default {
    dashboard: {
        header: {
            title: "Co:Efficient",
            subTitle: "最新情報",
        },
    },

    settings: {
        // =====================================================
        // General
        // =====================================================

        title: "設定",
        autoSave: "自動保存",

        // =====================================================
        // Sidebar
        // =====================================================

        sidebar: {
            interface: "インターフェース",
            dashboard: "ダッシュボード",
            modules: "モジュール",
            about: "情報",
        },

        // =====================================================
        // Interface
        // =====================================================

        interface: {
            title: "インターフェース",
            description: "外観と言語の設定",

            language: {
                title: "言語",
                description: "使用言語の選択",
            },

            appearance: {
                title: "外観",
                description: "見た目と操作感のカスタマイズ",

                current: "現在のスタイル",

                styles: {
                    title: "スタイル",
                    description: "プリセットまたはカスタムスタイルの選択",

                    builtIn: "プリセット",
                    custom: "カスタム",

                    apply: "適用",
                    create: "新規作成",
                    edit: "編集",
                    delete: "削除",
                },

                customization: {
                    title: "カスタマイズ",
                    description: "色、フォント、枠線、エフェクトの調整",

                    colors: "色",
                    typography: "タイポグラフィ",
                    borders: "枠線",
                    effects: "エフェクト",
                },
            },
        },

        // =====================================================
        // Dashboard
        // =====================================================

        dashboard: {
            title: "ダッシュボード",
            description: "新規ダッシュボードのデフォルトレイアウト設定",

            layout: {
                title: "レイアウト",
                description: "間隔と列数の調整",

                columns: "列数",
                gap: "間隔",
                padding: "パディング",
            },
        },

        // =====================================================
        // Modules
        // =====================================================

        modules: {
            title: "モジュール",
            description: "各モジュールのデフォルト動作設定",

            weather: {
                title: "天気",
            },

            schedule: {
                title: "スケジュール",
            },

            announcements: {
                title: "お知らせ",
            },
        },

        // =====================================================
        // About
        // =====================================================

        about: {
            title: "情報",
            description: "アプリ情報とクレジット",
        },
    },
};
