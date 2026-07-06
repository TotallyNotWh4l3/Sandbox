// ja.js
export default {
    dashboard: {
        header: {
            title: "Co:Efficient",
            subTitle: "アップデート情報",
        },
    },

    settings: {
        sidebar: {
            theme: "テーマと外観",
            location: "場所と言語",
            grid: "グリッドレイアウト",
            modules: "モジュール設定",
            presets: "プリセット",
        },

        theme: {
            title: "テーマと外観",
            presets: "プリセットテーマ",
            customization: "カスタマイズ",
            customizationDescription:
                "色、フォント、不透明度などの細かな設定は今後のアップデートで追加予定です。",

            options: {
                darkDefault: "ダーク（標準）",
                darkMinimal: "ダーク（ミニマル）",
                darkAccent: "ダーク（アクセント）",
                lightDefault: "ライト（標準）",
                lightMinimal: "ライト（ミニマル）",
                lightAccent: "ライト（アクセント）",
            },
        },

        grid: {
            title: "グリッドレイアウト",
            columns: "列数",
            columnsDescription: "ダッシュボードに配置するモジュールの列数を設定します。",
            spacing: "モジュール間隔",
            spacingDescription: "モジュール間の余白を調整します。",
            preview: "プレビュー",
            module: "モジュール",
            column: "列",
            columnsPlural: "列",

            gapOptions: {
                tight: "狭い",
                normal: "標準",
                spacious: "広い",
                extraSpacious: "とても広い",
            },
        },

        location: {
            title: "地域・言語設定",
            location: "地域",
            language: "言語",
            dashboardLocation: "表示地域（天気用）",
            placeholder: "例: Tokyo, New York",
            hint: "天気予報の取得対象となる都市名を入力してください。",
        },

        modules: {
            title: "モジュール設定",
            on: "オン",
            off: "オフ",

            names: {
                weather: "天気",
                schedule: "スケジュール",
                announcements: "お知らせ",
                sound: "サウンド",
            },

            descriptions: {
                weather: "現在の天気と予報を設定します。",
                schedule: "予定や時間割の表示を設定します。",
                announcements: "ダッシュボードのお知らせを設定します。",
                sound: "通知音やアラートを設定します。",
            },

            labels: {
                enabled: "有効",
                forecastDays: "予報日数",
                showAlerts: "気象警報を表示",
                viewMode: "表示モード",
                daysBeforeToday: "今日より前の日数",
                maxDisplay: "最大表示数",
                volume: "音量",
                alertSound: "通知音",
            },

            options: {
                relative: "相対表示",
                absolute: "絶対表示",
                default: "デフォルト",
                chime: "チャイム",
                bell: "ベル",
                none: "なし",
            },
        },

        presets: {
            title: "プリセット管理",
            builtIn: "標準プリセット",
            custom: "ユーザープリセット",
            saveCurrent: "現在の設定を保存",
            saveAsCustom: "名前を付けて保存",
            enterName: "プリセット名を入力",
            save: "保存",
            cancel: "キャンセル",
            reset: "リセット",
            resetButton: "すべての設定を初期化",
            warning: "すべての設定がデフォルト値に戻ります。",
            deleteConfirm: "プリセット「{name}」を削除しますか？",
            resetConfirm: "設定をすべて初期化しますか？この操作は取り消せません。",
        },
    },
};
